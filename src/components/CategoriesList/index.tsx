import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { PlusIcon } from "../../icons/Icons";
import Category from "../../schemas/CategorySchema";
import { getCategories } from "../../services/realm";
import { CardCategories } from "../CardCategories";
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

  const { categories } = useUpdateDataContext();

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
