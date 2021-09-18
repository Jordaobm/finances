import React from "react";
import { CardOperationProps } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";
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
      {operations?.map((operation, index) => (
        <ContainerCard key={index}>
          <ContentCard>
            <Bullet color={operation?.category?.color} />
            <TextOperation>{operation?.name}</TextOperation>

            <ValueAndMonth>
              <Value color={operation?.category?.color}>
                {formatCurrency(operation?.value)}
              </Value>
              <DateText>em 11/09, no Cartão Nubank</DateText>
            </ValueAndMonth>
          </ContentCard>
          {index !== operations?.length - 1 && <Line />}
        </ContainerCard>
      ))}
    </>
  );
};
