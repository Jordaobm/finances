import React from "react";
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
  return (
    <>
      {operations?.map((operation, index) => {
        return (
          <ContainerCard key={index}>
            <ContentCard>
              <Bullet color={operation?.category?.color} />
              <TextOperation>{operation?.name}</TextOperation>

              <ValueAndMonth>
                <Value color={operation?.category?.color}>
                  {formatCurrency(operation?.value)}
                </Value>
                <DateText>
                  em {operation?.date}, no {operation?.card?.institutionName}
                </DateText>
              </ValueAndMonth>
            </ContentCard>
          </ContainerCard>
        );
      })}
    </>
  );
};
