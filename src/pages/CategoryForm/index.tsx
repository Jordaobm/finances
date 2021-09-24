import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import { Input } from "../../components/Input";
import { InputColor } from "../../components/InputColor";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { ArrowLeftIcon, TrashIcon } from "../../icons/Icons";
import getRealm from "../../services/realm";
import { Category } from "../../types";
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

export const CategoryForm = () => {
  const { updateCategory, setUpdateCategory, setCategories } =
    useUpdateDataContext();
  const [form, setForm] = useState<Category>(
    updateCategory?.id
      ? updateCategory
      : ({ color: "rgba(1, 55, 148, 0.8)", number: 0 } as Category)
  );

  const navigation = useNavigation();

  async function saveCategory(category: Category) {
    const realm = await getRealm();

    realm.write(() => {
      realm.create(
        "Category",
        { ...category, id: new Date().getTime().toString() },
        "modified"
      );
    });

    Toast.show({
      type: "success",
      text1: "Categoria salva",
      text2: "A categoria foi salva com sucesso",
      autoHide: true,
    });

    setCategories(await getCategoriesByDB().then((data) => data));
  }

  async function editCategory(category: Category) {
    const realm = await getRealm();

    const collection = realm
      .objects("Category")
      .filtered("id= $0", category?.id);
    realm.write(() => {
      realm.delete(collection);
    });

    realm.write(() => {
      realm.create("Category", { ...category, id: category?.id }, "modified");
    });

    Toast.show({
      type: "success",
      text1: "Categoria alterada",
      text2: "A categoria foi alterada com sucesso",
      autoHide: true,
    });

    setCategories(await getCategoriesByDB().then((data) => data));
  }

  async function deleteCategory(category: Category) {
    const realm = await getRealm();

    const collection = realm
      .objects("Category")
      .filtered("id= $0", category?.id);
    realm.write(() => {
      realm.delete(collection);
    });
    setCategories(await getCategoriesByDB().then((data) => data));
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
              navigation.navigate("Categories");
              setUpdateCategory({} as Category);
            }}
          >
            <ArrowLeftIcon color="#595959" />
          </GoBack>
          <TitlePage>
            {updateCategory?.id
              ? "Editando categoria"
              : "Adicionando categoria"}
          </TitlePage>
          <SubtitlePage>
            Adicione uma categoria para melhor classificar suas entradas e
            despesas.
          </SubtitlePage>

          <FormContainer>
            <ContainerInput>
              <Input
                placeholder="Nome"
                onChangeText={(name) =>
                  setForm((state) => ({ ...state, name }))
                }
                value={form?.name}
              />
            </ContainerInput>

            <ContainerInput>
              <InputColor
                onChangeColor={(color, number) => {
                  setForm((state) => ({ ...state, color, number }));
                }}
                initialColor={form?.color}
                initialNumber={form?.number}
                placeholder="Cor da categoria"
              />
            </ContainerInput>

            {updateCategory?.id && (
              <DeleteButton
                onPress={async () => {
                  await deleteCategory(form);
                  navigation.navigate("Categories");
                  setUpdateCategory({} as Category);
                }}
              >
                <DeleteText>Excluir categoria</DeleteText>

                <TrashIcon color="#FF6F6F" />
              </DeleteButton>
            )}
          </FormContainer>
        </Container>
      </ScrollView>
      <Actions>
        <Action
          onPress={() => {
            navigation.navigate("Categories");
            setUpdateCategory({} as Category);
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
                text2: "Preencha o nome da categoria",
                autoHide: true,
              });
            } else {
              // salvar
              if (!updateCategory?.id) {
                await saveCategory(form);
                navigation.navigate("Categories");
              } else {
                await editCategory(form);
                navigation.navigate("Categories");
              }
            }
            setUpdateCategory({} as Category);
          }}
        >
          <AcceptText>{updateCategory?.id ? "Salvar" : "Cadastrar"}</AcceptText>
        </Action>
      </Actions>
    </>
  );
};
