import React from "react";
import { operations } from "../../database";
import { PlusIcon } from "../../icons/Icons";
import { Card, Operation } from "../../types";
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
  if (card?.institutionName) {
    // pegar as operações do cartão aqui
  }

  return (
    <Container>
      <Content>
        <ContentText>
          <OperationsText>Operações recentes</OperationsText>

          <AddOperations>
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
