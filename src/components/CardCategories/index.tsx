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
  IsTransfer,
  TextOperation,
  Value,
  ContainerText,
  ValueAndMonth,
  ContainerTitle,
  CategoryContainer,
  TitleCategory,
  Icone,
} from "./styles";

export const CardCategories = ({ categories }: CardCategoryProps) => {
  const { operations } = useUpdateDataContext();

  const navigation = useNavigation();

  const { setUpdateCategory } = useUpdateDataContext();

  return (
    <>
      {categories?.map((category, index) => {
        return (
          <ContainerCard
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
                  {
                    operations?.find((e) => e?.category?.id === category?.id)
                      ?.date
                  }
                </DateText>
              </ValueAndMonth>
            </ContentCard>
          </ContainerCard>
        );
      })}
    </>
  );
};
