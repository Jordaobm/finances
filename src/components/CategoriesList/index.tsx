import { useNavigation } from "@react-navigation/core";
import React from "react";
import { categories } from "../../database";
import { PlusIcon } from "../../icons/Icons";
import { Category, Operation } from "../../types";
import { CardCategories } from "../CardCategories";
import { CardOperation } from "../CardOperation";
import {
  AddOperations,
  AddOperationsText,
  Container,
  ContainerCardOperations,
  Content,
  ContentText,
  NotOperation,
  NotOperationSpan,
  OperationsText,
} from "./styles";

export const CategoriesList = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <ContentText>
          <OperationsText>Categorias adicionadas</OperationsText>

          <AddOperations onPress={() => navigation.navigate("CategoryForm")}>
            <AddOperationsText>Adicionar</AddOperationsText>
            <PlusIcon color="#595959" />
          </AddOperations>
        </ContentText>
        <ContainerCardOperations>
          {categories?.length > 0 ? (
            <CardCategories categories={categories} />
          ) : (
            <>
              <NotOperation>Ainda não há operações cadastradas</NotOperation>
              <NotOperationSpan>
                Cadastre uma operação e ela aparecerá aqui!
              </NotOperationSpan>
            </>
          )}
        </ContainerCardOperations>
      </Content>
    </Container>
  );
};
