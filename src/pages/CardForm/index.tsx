import { useNavigation } from "@react-navigation/core";
import React, { useRef, useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import { Input } from "../../components/Input";
import { InputColor } from "../../components/InputColor";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { ArrowLeftIcon, TrashIcon } from "../../icons/Icons";
import getRealm, { getCards, getCarteira } from "../../services/realm";
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
  const { setCards, updateCard, setUpdateCard, setSelectedCard, setWallet } =
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

  async function saveCard(card: Card) {
    const realm = await getRealm();

    const formattedData: Card = {
      ...card,
      id: new Date().getTime().toString(),
      currentValue: Number(card?.currentValue),
    };
    realm.write(() => {
      realm.create("Card", formattedData, "modified");
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
      realm.create(
        "Card",
        { ...card, currentValue: Number(card?.currentValue) },
        "modified"
      );
    });

    Toast.show({
      type: "success",
      text1: "Cartão editado com sucesso",
      text2: "O Cartão foi salvo com sucesso",
      autoHide: true,
    });

    setUpdateCard({} as Card);
    setCards(await getCards().then((data) => data));
    setWallet(await getCarteira().then((data) => data));
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
              setUpdateCard({} as Card);
            }}
          >
            <ArrowLeftIcon color="#595959" />
          </GoBack>
          <TitlePage>
            {updateCard?.id ? "Editando cartão" : "Adicionando cartão"}
          </TitlePage>
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
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                value={form?.name}
                returnKeyType={"next"}
                placeholder="Nome presente no cartão"
                onChangeText={(name) =>
                  setForm((state) => ({ ...state, name }))
                }
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                money
                placeholder="Valor disponível na conta"
                keyboardType="numeric"
                onChangeText={(value) => {
                  const valor = Number(
                    value
                      ?.replace("R$", "")
                      ?.replace(".", "")
                      ?.replace(",", ".")
                  ).toFixed(2);

                  setForm((state) => ({
                    ...state,
                    currentValue: valor,
                  }));
                }}
                value={
                  form?.currentValue
                    ? `${Number(form?.currentValue)?.toFixed(2)}`
                    : ``
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
            navigation.navigate("Cards");
            setUpdateCard({} as Card);
          }}
        >
          <CancelText>Cancelar</CancelText>
        </Action>
        <Action
          onPress={async () => {
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
