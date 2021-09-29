import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { PlusIcon } from "../../icons/Icons";
import { Card } from "../../types";
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
interface OperationsProps {
  card?: Card;
}

export const Operations = ({ card }: OperationsProps) => {

  const {operations} = useUpdateDataContext();

  const navigation = useNavigation();

  if (card?.institutionName) {
    // pegar as operações do cartão aqui
  }

  return (
    <Container>
      <Content>
        <ContentText>
          <OperationsText>Operações recentes</OperationsText>

          <AddOperations onPress={() => navigation.navigate("OperationForm")}>
            <AddOperationsText>Adicionar</AddOperationsText>
            <PlusIcon color="#fff" />
          </AddOperations>
        </ContentText>
        <ContainerCardOperations>
          {operations?.length > 0 ? (
            <CardOperation operations={operations} />
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
