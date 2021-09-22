import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
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
  const navigation = useNavigation();

  const { setUpdateCategory } = useUpdateDataContext();

  return (
    <>
      {categories?.map((category, index) => {
        const value = 0;

        return (
          <ContainerCard
            key={index}
            onPress={() => {
              setUpdateCategory(category);
              navigation.navigate("CategoryForm");
            }}
          >
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
