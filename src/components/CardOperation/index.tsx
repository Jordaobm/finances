import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text } from "react-native";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { CardOperationProps } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  Bullet,
  ContainerCard,
  ContentCard,
  DateText,
  IsTransfer,
  TextOperation,
  Value,
  ContainerText,
  ValueAndMonth,
  ContainerTitle,
  CategoryContainer,
  TitleCategory,
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
              <CategoryContainer>
                <Bullet color={operation?.category?.color} />
                <TitleCategory>{operation?.category?.name}</TitleCategory>
              </CategoryContainer>
              <ContainerTitle>
                {operation?.for?.id ? (
                  <ContainerText>
                    <TextOperation>{operation?.name}</TextOperation>
                    <IsTransfer>
                      Essa foi uma transferência de{" "}
                      {operation?.origin?.institutionName ||
                        operation?.origin?.name}{" "}
                      para{" "}
                      {operation?.for?.institutionName || operation?.for?.name}
                    </IsTransfer>
                  </ContainerText>
                ) : (
                  <TextOperation>{operation?.name}</TextOperation>
                )}
              </ContainerTitle>

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
