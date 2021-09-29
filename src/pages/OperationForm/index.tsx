import { useNavigation } from "@react-navigation/core";
import React, { useRef, useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { typeOperation } from "../../database";
import { ArrowLeftIcon } from "../../icons/Icons";
import { getCards, getOperations, updateCard } from "../../services/realm";
import { Operation } from "../../types";
import {
  AcceptText,
  Action,
  Actions,
  CancelText,
  Container,
  ContainerInput,
  FormContainer,
  GoBack,
  SubtitlePage,
  TitlePage,
} from "./styles";
export const OperationForm = () => {
  const {
    updateOperation,
    setUpdateOperation,
    categories,
    cards,
    wallet,
    setCards,
    setOperations
  } = useUpdateDataContext();
  const [form, setForm] = useState<Operation>({} as Operation);

  const cardAndCarteira = [...cards, wallet];

  const navigation = useNavigation();

  const valueInputRef = useRef(null);

  async function saveOperation(operation: Operation) {
    await updateCard(operation);
    setCards(await getCards().then((data) => data));

    Toast.show({
      type: "success",
      text1: "Operação adicionada com sucesso",
      text2: `A operação ${operation?.name} foi vinculada à ${operation?.card?.institutionName}`,
      autoHide: true,
    });

    

    setOperations(await getOperations());
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
              navigation.goBack();
              //   setupdateOperation({} as Category);
            }}
          >
            <ArrowLeftIcon color="#595959" />
          </GoBack>
          <TitlePage>
            {updateOperation?.id
              ? "Editando categoria"
              : "Adicionando operação"}
          </TitlePage>
          <SubtitlePage>
            Adicione seus ganhos e despesas todo o mês para obter o controle das
            finanças
          </SubtitlePage>

          <FormContainer>
            <ContainerInput>
              <Select
                value={form?.type}
                items={typeOperation}
                placeholder="Tipo de operação"
                onValueChange={(type) =>
                  setForm((state) => ({ ...state, type }))
                }
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Nome"
                onChangeText={(name) =>
                  setForm((state) => ({ ...state, name }))
                }
                value={form?.name}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  valueInputRef?.current?.focus();
                }}
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                reference={valueInputRef}
                placeholder="Valor"
                keyboardType="number-pad"
                onChangeText={(value) =>
                  setForm((state) => ({ ...state, value: Number(value) }))
                }
                value={form?.value?.toString()}
              />
            </ContainerInput>

            <ContainerInput>
              <Select
                value={form?.category?.id}
                items={categories.map((category) => ({
                  label: category?.name,
                  value: category?.id?.toString() || "",
                  id: category?.id,
                }))}
                placeholder="Categoria"
                onValueChange={(idCategory) => {
                  const selectedCategory = categories?.find(
                    (item) => item?.id?.toString() === idCategory
                  );

                  if (selectedCategory) {
                    setForm((state) => ({
                      ...state,
                      category: selectedCategory,
                    }));
                  }
                }}
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                maskDate
                placeholder="Data"
                keyboardType="number-pad"
                onChangeText={(date) =>
                  setForm((state) => ({ ...state, date }))
                }
                value={form?.name}
              />
            </ContainerInput>

            {/* carteira / cartao */}
            <ContainerInput>
              <Select
                value={form?.card?.id}
                items={cardAndCarteira.map((card) => ({
                  label:
                    card?.institutionName !== ""
                      ? card?.institutionName
                      : card?.name,
                  value: card?.id?.toString() || "",
                  id: card?.id,
                }))}
                placeholder="Vincular operação à..."
                onValueChange={(idCard) => {
                  const selectedCard = cardAndCarteira?.find(
                    (item) => item?.id?.toString() === idCard
                  );

                  if (selectedCard) {
                    setForm((state) => ({
                      ...state,
                      card: selectedCard,
                    }));
                  }
                }}
              />
            </ContainerInput>

            {/* {updateOperation?.id && (
              <DeleteButton
                onPress={async () => {
                  //   await deleteCategory(form);
                  navigation.goBack();
                  setUpdateOperation({} as Operation);
                }}
              >
                <DeleteText>Excluir categoria</DeleteText>

                <TrashIcon color="#FF6F6F" />
              </DeleteButton>
            )} */}
          </FormContainer>
        </Container>
      </ScrollView>
      <Actions>
        <Action
          onPress={() => {
            navigation.goBack();
            setUpdateOperation({} as Operation);
          }}
        >
          <CancelText>Cancelar</CancelText>
        </Action>
        <Action
          onPress={async () => {
            if (!form?.name || form?.name === "") {
              Toast.show({
                type: "error",
                text1: "Ocorreu um erro",
                text2: "Preencha todos os dados da operação",
                autoHide: true,
              });
            } else {
              // salvar
              if (!updateOperation?.id) {
                await saveOperation(form);
                navigation.goBack();
              } else {
                // await editCategory(form);
                // navigation.goBack();
              }
            }
            setUpdateOperation({} as Operation);
          }}
        >
          <AcceptText>
            {updateOperation?.id ? "Salvar" : "Cadastrar"}
          </AcceptText>
        </Action>
      </Actions>
    </>
  );
};
