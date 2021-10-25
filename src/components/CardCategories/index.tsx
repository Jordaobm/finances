import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { Category } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";
import { getLastOperationByCategory } from "../../utils/getLastOperation";
import {
  Bullet,
  CategoryContainer,
  ContainerCard,
  ContentCard,
  DateText,
  TitleCategory,
  Value,
  ValueAndMonth,
} from "./styles";

export interface CardCategoryProps {
  categories: Category[];
  border?: boolean;
}

export const CardCategories = ({ categories }: CardCategoryProps) => {
  const { operations, setUpdateCategory } = useUpdateDataContext();

  const navigation = useNavigation();

  return (
    <>
      {categories?.map((category, index) => {
        return (
          <ContainerCard
            testID="addCategory"
            key={index}
            onPress={() => {
              setUpdateCategory(category);
              navigation.navigate("CategoryForm");
            }}
          >
            <ContentCard>
              <CategoryContainer>
                <Bullet color={category?.color} />
                <TitleCategory>{category?.name}</TitleCategory>
              </CategoryContainer>
              <ValueAndMonth>
                <Value color={category?.color}>
                  {formatCurrency(Number(category?.accumuledValue))}
                </Value>
                <DateText>
                  última adição em{" "}
                  {getLastOperationByCategory(operations, category)?.date}
                </DateText>
              </ValueAndMonth>
            </ContentCard>
          </ContainerCard>
        );
      })}
    </>
  );
};
