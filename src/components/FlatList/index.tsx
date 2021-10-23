import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { PlusIcon } from "../../icons/Icons";
import { Card, Operation } from "../../types";
import { FlatListOperationItem } from "./FlatListOperationItem";
import {
  AddOperations,
  AddOperationsText,
  ContainerCardOperations,
  ContainerNotOperation,
  ContentText,
  FlatListContainer,
  NotOperation,
  NotOperationSpan,
  OperationsText,
} from "./styles";

interface FlatListOperationsProps {
  card?: Card;
  color?: string;
  addOperation?: boolean;
  operationText?: string;
  listOperations?: Operation[];
  border?: boolean;
}

export interface RenderItemProps {
  item: Operation;
}

export const FlatListOperations = ({
  card,
  color,
  addOperation = true,
  operationText,
  listOperations,
  border,
}: FlatListOperationsProps) => {
  const { operations } = useUpdateDataContext();
  let operationsFilter = operations;

  if (listOperations) {
    operationsFilter = listOperations;
  }

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
  const navigation = useNavigation();

  return (
    <FlatListContainer>
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

      {operationsFilter?.length !== 0 ? (
        <ContainerCardOperations
          data={operationsFilter}
          renderItem={({ item }: RenderItemProps) => (
            <FlatListOperationItem operation={item} />
          )}
          keyExtractor={(item, index) => `${index}`}
        />
      ) : (
        <ContainerNotOperation>
          <NotOperation>Não há operações para este período</NotOperation>
          <NotOperationSpan>
            Cadastre uma operação e ela aparecerá aqui!
          </NotOperationSpan>
        </ContainerNotOperation>
      )}
    </FlatListContainer>
  );
};
