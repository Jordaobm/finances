import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { CardOperationProps } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  Bullet,
  ContainerCard,
  ContentCard,
  DateText,
  TextOperation,
  Value,
  ValueAndMonth,
} from "./styles";

export const CardOperation = ({ operations }: CardOperationProps) => {
  const navigation = useNavigation();
  const { setUpdateOperation } = useUpdateDataContext();

  return (
    <>
      {operations?.map((operation, index) => {
        return (
          <ContainerCard
            key={index}
            onPress={() => {
              navigation.navigate("OperationForm");
              setUpdateOperation(operation);
            }}
          >
            <ContentCard>
              <Bullet color={operation?.category?.color} />
              <TextOperation>{operation?.name}</TextOperation>

              <ValueAndMonth>
                <Value color={operation?.category?.color}>
                  {formatCurrency(operation?.value)}
                </Value>
                <DateText>
                  em {operation?.date},{" "}
                  {operation?.card?.institutionName
                    ? `no ${operation?.card?.institutionName}`
                    : `na ${operation?.card?.name}`}
                </DateText>
              </ValueAndMonth>
            </ContentCard>
          </ContainerCard>
        );
      })}
    </>
  );
};
