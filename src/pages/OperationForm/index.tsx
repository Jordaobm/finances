import { useNavigation } from "@react-navigation/core";
import React, { useRef, useState } from "react";
import { ScrollView, StatusBar, TextInput } from "react-native";
import Toast from "react-native-toast-message";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { operations, typeOperation } from "../../database";
import { ArrowLeftIcon, TrashIcon } from "../../icons/Icons";
import Card from "../../schemas/CardSchema";
import {
  getCards,
  getOperations,
  addOrExcludeOperationAndUpdateCard,
  getCategories,
} from "../../services/realm";
import { Category, Operation } from "../../types";
import {
  AcceptText,
  Action,
  Actions,
  CancelText,
  Container,
  ContainerInput,
  DeleteButton,
  DeleteText,
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
    setOperations,
    operations,
    setCategories,
  } = useUpdateDataContext();

  const [form, setForm] = useState<Operation>(
    updateOperation?.id
      ? {
          ...updateOperation,
          value: Number(updateOperation?.value)?.toFixed(2),
        }
      : ({
          category: {} as Category,
          date: "",
          name: "",
          value: "",
          card: {} as Card,
          type: "",
        } as Operation)
  );

  const cardAndCarteira = [...cards, wallet];

  const navigation = useNavigation();

  async function saveOperation(operation: Operation, showMessage: boolean) {
    const formattedOperation: Operation = {
      ...operation,
      value: Number(operation?.value),
    };

    await addOrExcludeOperationAndUpdateCard(formattedOperation, false);
    setCards(await getCards().then((data) => data));
    setOperations(await getOperations());
    setCategories(await getCategories().then((data) => data));
    if (showMessage) {
      Toast.show({
        type: "success",
        text1: "Operação adicionada com sucesso",
        text2: `A operação ${formattedOperation?.name} foi vinculada à ${formattedOperation?.card?.institutionName}`,
        autoHide: true,
      });
    }
  }

  async function deleteOperation(operation: Operation, showMessage: boolean) {
    const formattedOperation: Operation = {
      ...operation,
      type:
        operation?.type === "INPUT"
          ? "OUTPUT"
          : operation?.type === "OUTPUT"
          ? "INPUT"
          : operation?.type,
      value: Number(operation?.value),
    };

    await addOrExcludeOperationAndUpdateCard(formattedOperation, true);
    setCards(await getCards().then((data) => data));
    setOperations(await getOperations());
    setCategories(await getCategories().then((data) => data));

    if (showMessage) {
      Toast.show({
        type: "success",
        text1: "Operação excluída com sucesso",
        text2: `A operação ${formattedOperation?.name} foi desvinculada à ${formattedOperation?.card?.institutionName}`,
        autoHide: true,
      });
    }
  }

  async function editOperation(operation: Operation) {
    const excludeOp = operations?.find((op) => op?.id === operation?.id);

    if (excludeOp) {
      await deleteOperation(excludeOp, false);
      await saveOperation(operation, false);
    }
    setCategories(await getCategories().then((data) => data));

    Toast.show({
      type: "success",
      text1: "Operação editada com sucesso",
      autoHide: true,
    });
  }

  const validateForm = (operation: Operation) => {
    let isValid = true;

    Object.keys(form)?.map((key) => {
      if (form?.[key] === "" || form?.[key] === {}) {
        isValid = false;
        Toast.show({
          type: "error",
          text1: "Ocorreu um erro",
          text2: "Preencha todos os dados da operação",
          autoHide: true,
        });
      }

      if (form?.date?.length !== 10) {
        isValid = false;
        Toast.show({
          type: "error",
          text1: "Data inválida",
          text2: "A data precisa conter dia, mês e ano",
          autoHide: true,
        });
      }
    });

    return isValid;
  };

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
              setUpdateOperation({} as Operation);
              navigation.goBack();
            }}
          >
            <ArrowLeftIcon color="#595959" />
          </GoBack>
          <TitlePage>
            {updateOperation?.id ? "Editando operação" : "Adicionando operação"}
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
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                money
                placeholder="Valor"
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
                    value: valor,
                  }));
                }}
                value={form?.value?.toString()}
              />
            </ContainerInput>

            <ContainerInput>
              <Select
                value={form?.category?.id || ""}
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
                value={form?.date}
              />
            </ContainerInput>

            {/* carteira / cartao */}
            <ContainerInput>
              <Select
                value={form?.card?.id || ""}
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

            {updateOperation?.id && (
              <DeleteButton
                onPress={async () => {
                  await deleteOperation(form, true);
                  navigation.goBack();
                  setUpdateOperation({} as Operation);
                }}
              >
                <DeleteText>Excluir operação</DeleteText>

                <TrashIcon color="#FF6F6F" />
              </DeleteButton>
            )}
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
            if (validateForm(form)) {
              if (!updateOperation?.id) {
                await saveOperation(form, true);
                navigation.goBack();
              } else {
                await editOperation(form);
                navigation.goBack();
              }
              setUpdateOperation({} as Operation);
            }
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
