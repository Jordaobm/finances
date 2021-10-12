import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { ActivityIndicator, ScrollView, StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { typeOperation } from "../../database";
import { ArrowLeftIcon, TrashIcon } from "../../icons/Icons";
import Card from "../../schemas/CardSchema";
import {
  addOrExcludeOperationAndUpdateCard,
  createOperationPouped,
  deleteOperationPouped,
  getCards,
  getCarteira,
  getCategories,
  getOperations,
} from "../../services/realm";
import { Category, Operation } from "../../types";
import { ContainerLoading } from "../Charts/styles";
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
    setWallet,
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

  const [isLoading, setIsLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

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
    setWallet(await getCarteira().then((data) => data));
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
    setWallet(await getCarteira().then((data) => data));
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
    setWallet(await getCarteira().then((data) => data));
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

  async function savePouped(operation: Operation) {
    await createOperationPouped(operation);
    setCards(await getCards().then((data) => data));
    setOperations(await getOperations());
    setCategories(await getCategories().then((data) => data));
    setWallet(await getCarteira().then((data) => data));
    Toast.show({
      type: "success",
      text1: "Transferência realizada com sucesso",
      text2: `O valor foi transferido do ${
        form?.origin?.institutionName
          ? form?.origin?.institutionName
          : form?.origin?.name
      } para o ${
        form?.for?.institutionName
          ? form?.for?.institutionName
          : form?.for?.name
      }`,
      autoHide: true,
    });
  }

  async function deletePouped(operation: Operation) {
    if (operation?.id) {
      await deleteOperationPouped(operation?.id?.toString());
      setCards(await getCards().then((data) => data));
      setOperations(await getOperations());
      setCategories(await getCategories().then((data) => data));
      setWallet(await getCarteira().then((data) => data));
      Toast.show({
        type: "success",
        text1: "Transferência excluida com sucesso",
        text2: `O valor foi transferido do ${
          form?.origin?.institutionName
            ? form?.origin?.institutionName
            : form?.origin?.name
        } para o ${
          form?.for?.institutionName
            ? form?.for?.institutionName
            : form?.for?.name
        }`,
        autoHide: true,
      });
    }
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
            {form?.type !== "POUPED" ? (
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
            ) : (
              <>
                <ContainerInput>
                  <Select
                    value={form?.origin?.id || ""}
                    items={cardAndCarteira.map((card) => ({
                      label:
                        card?.institutionName !== ""
                          ? card?.institutionName
                          : card?.name,
                      value: card?.id?.toString() || "",
                      id: card?.id,
                    }))}
                    placeholder="De..."
                    onValueChange={(idCard) => {
                      const selectedCard = cardAndCarteira?.find(
                        (item) => item?.id?.toString() === idCard
                      );

                      if (selectedCard) {
                        setForm((state) => ({
                          ...state,
                          origin: selectedCard,
                        }));
                      }
                    }}
                  />
                </ContainerInput>

                <ContainerInput>
                  <Select
                    value={form?.for?.id || ""}
                    items={cardAndCarteira.map((card) => ({
                      label:
                        card?.institutionName !== ""
                          ? card?.institutionName
                          : card?.name,
                      value: card?.id?.toString() || "",
                      id: card?.id,
                    }))}
                    placeholder="Para..."
                    onValueChange={(idCard) => {
                      const selectedCard = cardAndCarteira?.find(
                        (item) => item?.id?.toString() === idCard
                      );

                      if (selectedCard) {
                        setForm((state) => ({
                          ...state,
                          for: selectedCard,
                          card: selectedCard,
                        }));
                      }
                    }}
                  />
                </ContainerInput>
              </>
            )}
            {updateOperation?.id && (
              <DeleteButton
                onPress={async () => {
                  setDeleteLoading(true);

                  if (form?.type !== "POUPED") {
                    await deleteOperation(form, true);
                    setUpdateOperation({} as Operation);
                  } else {
                    await deletePouped(form);
                    setUpdateOperation({} as Operation);
                  }
                  setTimeout(() => {
                    setDeleteLoading(false);
                    navigation.goBack();
                  }, 1000);
                }}
              >
                {deleteLoading ? (
                  <ContainerLoading>
                    <ActivityIndicator color="#FF6F6F" />
                  </ContainerLoading>
                ) : (
                  <>
                    <DeleteText>Excluir operação</DeleteText>

                    <TrashIcon color="#FF6F6F" />
                  </>
                )}
              </DeleteButton>
            )}
          </FormContainer>
        </Container>
      </ScrollView>
      <Actions>
        <Action
          onPress={() => {
            setUpdateOperation({} as Operation);
            navigation.goBack();
          }}
        >
          <CancelText>Cancelar</CancelText>
        </Action>
        <Action
          onPress={async () => {
            setIsLoading(true);
            if (validateForm(form)) {
              if (form?.type !== "POUPED") {
                if (!updateOperation?.id) {
                  await saveOperation(form, true);
                } else {
                  await editOperation(form);
                }
                setUpdateOperation({} as Operation);
              } else {
                if (updateOperation?.id) {
                  // editando transferência
                  await deletePouped(form);
                  await savePouped(form);

                  console.log("editar transferência");
                } else {
                  await savePouped(form);
                }
              }
            }
            setTimeout(() => {
              setUpdateOperation({} as Operation);
              setIsLoading(false);
              navigation.goBack();
            }, 1000);
          }}
        >
          <AcceptText>
            {isLoading ? (
              <ActivityIndicator color="#3cc75e" />
            ) : updateOperation?.id ? (
              "Salvar"
            ) : (
              "Cadastrar"
            )}
          </AcceptText>
        </Action>
      </Actions>
    </>
  );
};
