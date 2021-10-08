import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { PlusIcon } from "../../icons/Icons";
import { Card, Operation } from "../../types";
import { CardOperation } from "../CardOperation";
import {
  AddOperations,
  AddOperationsText,
  Container,
  ContainerCardOperations,
  ContainerNotOperation,
  Content,
  ContentText,
  NotOperation,
  NotOperationSpan,
  OperationsText,
} from "./styles";
interface OperationsProps {
  card?: Card;
  color?: string;
  addOperation?: boolean;
  operationText?: string;
  listOperations?: Operation[];
  border?: boolean;
}

export const Operations = ({
  card,
  color,
  addOperation = true,
  operationText,
  listOperations,
  border,
}: OperationsProps) => {
  const { operations } = useUpdateDataContext();
  let operationsFilter = operations;

  if (listOperations) {
    operationsFilter = listOperations;
  }

  const navigation = useNavigation();

  if (card?.institutionName || card?.name) {
    operationsFilter = operationsFilter?.filter((operation) => {
      if (operation?.card?.id === card?.id) {
        return operation;
      }

      if (operation?.origin?.id === card?.id) {
        return operation;
      }
    });
  }

  return (
    <Container>
      <Content>
        <ContentText>
          <OperationsText style={{ color: color ? color : "#fff" }}>
            {operationText ? operationText : "Operações recentes"}
          </OperationsText>

          {addOperation && (
            <AddOperations onPress={() => navigation.navigate("OperationForm")}>
              <AddOperationsText style={{ color: color ? color : "#fff" }}>
                Adicionar
              </AddOperationsText>
              <PlusIcon color={color ? color : "#fff"} />
            </AddOperations>
          )}
        </ContentText>
        <ContainerCardOperations border={border}>
          {operationsFilter?.length > 0 ? (
            <CardOperation operations={operationsFilter} />
          ) : (
            <ContainerNotOperation>
              <NotOperation>Não há operações para este período</NotOperation>
              <NotOperationSpan>
                Cadastre uma operação e ela aparecerá aqui!
              </NotOperationSpan>
            </ContainerNotOperation>
          )}
        </ContainerCardOperations>
      </Content>
    </Container>
  );
};
