import { useNavigation } from "@react-navigation/core";
import React, { useRef, useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import { Input } from "../../components/Input";
import { InputColor } from "../../components/InputColor";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { ArrowLeftIcon, TrashIcon } from "../../icons/Icons";
import getRealm, { getCards } from "../../services/realm";
import { Card } from "../../types";
import {
  AcceptText,
  Action,
  Actions,
  BoldText,
  CancelText,
  Container,
  ContainerInput,
  ContainerText,
  DeleteButton,
  DeleteText,
  FormContainer,
  GoBack,
  NormalText,
  SubtitlePage,
  TitlePage,
} from "./styles";
export const CardForm = ({}) => {
  const { setCards, updateCard, setUpdateCard, setSelectedCard } =
    useUpdateDataContext();

  const [form, setForm] = useState(
    updateCard?.id
      ? updateCard
      : ({
          colorBackground: "rgba(1, 55, 148, 0.8)",
          colorBackgroundNumber: 0,
          colorText: "#ffffff",
          colorTextNumber: 275,
        } as Card)
  );

  const navigation = useNavigation();

  const nameCardInput = useRef(null);
  const currentValue = useRef(null);

  async function saveCard(card: Card) {
    const realm = await getRealm();

    realm.write(() => {
      realm.create(
        "Card",
        { ...card, id: new Date().getTime().toString() },
        "modified"
      );
    });

    Toast.show({
      type: "success",
      text1: "Cartão salvo com sucesso",
      text2: "O Cartão foi salvo com sucesso",
      autoHide: true,
    });

    setCards(await getCards().then((data) => data));
  }

  async function deleteCard(card: Card) {
    const realm = await getRealm();

    const collection = realm.objects("Card").filtered("id= $0", card?.id);
    realm.write(() => {
      realm.delete(collection);
    });
    setCards(await getCards().then((data) => data));
    setSelectedCard({} as Card);
  }

  async function editCard(card: Card) {
    const realm = await getRealm();

    const collection = realm.objects("Card").filtered("id= $0", card?.id);
    realm.write(() => {
      realm.delete(collection);
    });

    realm.write(() => {
      realm.create("Card", { ...card }, "modified");
    });

    Toast.show({
      type: "success",
      text1: "Cartão editado com sucesso",
      text2: "O Cartão foi salvo com sucesso",
      autoHide: true,
    });

    setUpdateCard({} as Card);
    setCards(await getCards().then((data) => data));
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(1, 55, 148, 0.0)"
        translucent
        hidden
      />
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Container>
          <GoBack
            onPress={() => {
              navigation.navigate("Cards");
            }}
          >
            <ArrowLeftIcon color="#595959" />
          </GoBack>
          <TitlePage>Adicionando cartão</TitlePage>
          <SubtitlePage>
            Adicione seus cartões para obter o controle das finanças.
          </SubtitlePage>

          <FormContainer>
            <ContainerInput>
              <Input
                value={form?.institutionName}
                placeholder="Nome da instituição financeira"
                onChangeText={(institutionName) =>
                  setForm((state) => ({ ...state, institutionName }))
                }
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  nameCardInput.current.focus();
                }}
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                value={form?.name}
                reference={nameCardInput}
                onSubmitEditing={() => {
                  currentValue.current.focus();
                }}
                returnKeyType={"next"}
                placeholder="Nome presente no cartão"
                onChangeText={(name) =>
                  setForm((state) => ({ ...state, name }))
                }
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                keyboardType="number-pad"
                value={form?.currentValue ? `${form?.currentValue}` : ``}
                reference={currentValue}
                placeholder="Valor disponível na conta"
                onChangeText={(currentValue) =>
                  setForm((state) => ({
                    ...state,
                    currentValue: Number(currentValue),
                  }))
                }
              />
            </ContainerInput>

            <ContainerInput>
              <InputColor
                onChangeColor={(colorBackground, colorBackgroundNumber) => {
                  setForm((state) => ({
                    ...state,
                    colorBackground,
                    colorBackgroundNumber,
                  }));
                }}
                initialColor={
                  form?.colorBackground
                    ? form?.colorBackground
                    : "rgba(1, 55, 148, 0.8)"
                }
                initialNumber={
                  form?.colorBackgroundNumber
                    ? Number(form?.colorBackgroundNumber)
                    : 0
                }
                placeholder="Cor de fundo do cartão"
              />
            </ContainerInput>

            <ContainerInput>
              <InputColor
                onChangeColor={(colorText, colorTextNumber) => {
                  setForm((state) => ({
                    ...state,
                    colorText,
                    colorTextNumber,
                  }));
                }}
                initialColor={form?.colorText ? form?.colorText : "#ffffff"}
                initialNumber={
                  form?.colorTextNumber ? Number(form?.colorTextNumber) : 275
                }
                placeholder="Cor do texto do cartão"
                palette
              />
            </ContainerInput>

            {updateCard?.id && (
              <DeleteButton
                onPress={async () => {
                  await deleteCard(form);
                  navigation.navigate("Cards");
                  setUpdateCard({} as Card);
                }}
              >
                <DeleteText>Excluir cartão</DeleteText>

                <TrashIcon color="#FF6F6F" />
              </DeleteButton>
            )}

            <ContainerInput style={{ marginTop: 50, marginBottom: 50 }}>
              <ContainerText>
                <BoldText>
                  Atenção:{" "}
                  <NormalText>
                    para melhor usabilidade da aplicação, recomendamos usar uma
                    cor de contraste para os textos do cartão. Para cartões
                    escuros, opte por cores claras (branco), e para cartões
                    claros, cores escuras melhoram a legibilidade dos dados
                  </NormalText>
                </BoldText>
              </ContainerText>
            </ContainerInput>
          </FormContainer>
        </Container>
      </ScrollView>
      <Actions>
        <Action
          onPress={() => {
            setUpdateCard({} as Card);
            navigation.navigate("Cards");
          }}
        >
          <CancelText>Cancelar</CancelText>
        </Action>
        <Action
          onPress={async () => {
            // navigation.navigate("Cards");
            if (
              !form?.name ||
              form?.name == "" ||
              !form?.institutionName ||
              form?.institutionName == "" ||
              !form?.currentValue
            ) {
              Toast.show({
                type: "error",
                text1: "Ocorreu um erro",
                text2:
                  "Preencha corretamente o nome da instituição, nome presente no cartão e valor disponível",
                autoHide: true,
              });
            } else {
              if (updateCard?.id) {
                // editar
                await editCard(form);
                navigation.navigate("Cards");
              } else {
                await saveCard(form);
                navigation.navigate("Cards");
              }
            }
          }}
        >
          <AcceptText>{updateCard?.id ? "Salvar" : "Cadastrar"}</AcceptText>
        </Action>
      </Actions>
    </>
  );
};
