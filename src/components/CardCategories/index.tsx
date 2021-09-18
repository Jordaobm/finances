import React from "react";
import { CardCategoryProps, CardOperationProps } from "../../types";
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

export const CardCategories = ({ categories }: CardCategoryProps) => {
  return (
    <>
      {categories?.map((category, index) => {
        const value = 2000;

        return (
          <ContainerCard key={index}>
            <ContentCard>
              <Bullet color={category?.color} />
              <TextOperation>{category?.name}</TextOperation>

              <ValueAndMonth>
                <Value color={category?.color}>{formatCurrency(value)}</Value>
                <DateText>última adição em 11/09</DateText>
              </ValueAndMonth>
            </ContentCard>
          </ContainerCard>
        );
      })}
    </>
  );
};
