import { useNavigation } from "@react-navigation/native";
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
import { dateToString } from "../../utils/formatDate";
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
    saveOperation,
    editOperation,
    savePouped,
    editPouped,
    deletePouped,
    deleteOperation,
  } = useUpdateDataContext();

  const [form, setForm] = useState<Operation>(
    updateOperation?.id
      ? {
          ...updateOperation,
          value: Number(updateOperation?.value)?.toFixed(2),
        }
      : ({
          category: {} as Category,
          date: dateToString(new Date()),
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

  const submitForm = (form: Operation) => {
    if (validateForm(form)) {
      if (form?.type !== "POUPED") {
        if (!updateOperation?.id) {
          saveOperation(form, true);
        } else {
          editOperation(form);
        }
        setUpdateOperation({} as Operation);
      } else {
        if (updateOperation?.id) {
          editPouped(form);
        } else {
          savePouped(form);
        }
      }
    }

    setUpdateOperation({} as Operation);
    setIsLoading(false);
    navigation.goBack();
  };

  async function delay() {
    return new Promise(function (resolve) {
      setTimeout(resolve, 3000);
    });
  }

  async function deleteOp(form: Operation) {
    if (form?.type === "POUPED") {
      await deletePouped(form);
    } else {
      await deleteOperation(form, true);
    }
    setDeleteLoading((state) => false);
    setUpdateOperation({} as Operation);
    navigation.goBack();
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
                onPress={() => {
                  setDeleteLoading((state) => true);
                  deleteOp(form);
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
          onPress={() => {
            setIsLoading(true);
            submitForm(form);
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
