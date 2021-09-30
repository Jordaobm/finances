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
              <Bullet color={category?.color} />
              <TextOperation>{category?.name}</TextOperation>

              <ValueAndMonth>
                <Value color={category?.color}>
                  {formatCurrency(Number(category?.accumuledValue))}
                </Value>

                {operations?.find((e) => e?.category?.id === category?.id)
                  ?.date && (
                  <DateText>
                    última adição em{" "}
                    {
                      operations?.find((e) => e?.category?.id === category?.id)
                        ?.date
                    }
                  </DateText>
                )}
              </ValueAndMonth>
            </ContentCard>
          </ContainerCard>
        );
      })}
    </>
  );
};
