import React from "react";
import { PlusIcon } from "../../icons/Icons";
import { Operation } from "../../types";
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

export const Operations = () => {
  const mockOperations: Operation[] = [
    {
      id: 1,
      card: {
        name: "Cartão Nubank",
      },
      category: {
        color: "#3CC75E",
      },
      date: new Date(),
      value: 2000,
      name: "Salário",
    },
    {
      id: 2,

      card: {
        name: "Cartão Caixa Econômica",
      },
      category: {
        color: "#FF6F6F",
      },
      date: new Date(),
      value: 700,
      name: "Mercado",
    },
    {
      id: 3,

      card: {
        name: "Carteira Atual",
      },
      category: {
        color: "#E1A0FF",
      },
      date: new Date(),
      value: 400,
      name: "Internet",
    },
    {
      id: 4,

      card: {
        name: "Outra conta",
      },
      category: {
        color: "#16b900",
      },
      date: new Date(),
      value: 400,
      name: "Outra conta",
    },
    {
      id: 5,

      card: {
        name: "Outra conta",
      },
      category: {
        color: "#16b900",
      },
      date: new Date(),
      value: 400,
      name: "Outra conta",
    },
    {
      id: 6,

      card: {
        name: "Outra conta",
      },
      category: {
        color: "#16b900",
      },
      date: new Date(),
      value: 400,
      name: "Outra conta",
    },
  ];

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
          {mockOperations?.length > 0 ? (
            <CardOperation operations={mockOperations} />
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
