import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import {
  InputOperationCoin,
  OutputOperationCoin,
  TransferOperationIcon,
} from "../../icons/Icons";
import { CardOperationProps } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  Bullet,
  CategoryContainer,
  ContainerCard,
  ContainerNameCategory,
  ContainerText,
  ContainerTitle,
  ContentCard,
  DateText,
  Icone,
  IsTransfer,
  TextOperation,
  TitleCategory,
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
              <Icone>
                {operation?.type === "INPUT" && (
                  <InputOperationCoin color={"#3CC75E"} />
                )}

                {operation?.type === "OUTPUT" && (
                  <OutputOperationCoin color={"#FF6F6F"} />
                )}

                {operation?.type === "POUPED" && (
                  <TransferOperationIcon color={"#DEBB00"} />
                )}
              </Icone>

              <CategoryContainer>
                <Bullet color={operation?.category?.color} />
                <ContainerNameCategory>
                  <TitleCategory>{operation?.category?.name}</TitleCategory>
                </ContainerNameCategory>
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
