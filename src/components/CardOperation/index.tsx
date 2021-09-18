import React from "react";
import { CardOperationProps } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";
import { getDayAndMonthByDate } from "../../utils/formatDate";
import {
  Bullet,
  ContainerCard,
  ContentCard,
  DateText,
  Line,
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
                  em {getDayAndMonthByDate(operation?.date)}, no{" "}
                  {operation?.card?.institutionName
                    ? operation?.card?.institutionName
                    : operation?.wallet?.name && operation?.wallet?.name}
                </DateText>
              </ValueAndMonth>
            </ContentCard>
          </ContainerCard>
        );
      })}
    </>
  );
};
