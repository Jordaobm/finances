import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { CategoriesList } from ".";
import { Category } from "../../types";

let mockCategories: Category[] = [
  {
    accumuledValue: 500,
    color: "rgba(197, 48, 48, 1  )",
    id: "1635000545505",
    name: "Dinheiro da vovó",
    number: 191.3680076599121,
  },
];

function mockUseUpdateDataContext() {
  return {
    categories: mockCategories,
  };
}

jest.mock("../../context/UpdateDataContext", () => {
  return { useUpdateDataContext: mockUseUpdateDataContext };
});

it("should be able to render CategoriesList component", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <CategoriesList />
    </NavigationContainer>
  );

  const buttonAddCategory = await getByTestId("addCategory").props?.accessible;
  await fireEvent(getByTestId("addCategoryButton"), "onPress");

  expect(buttonAddCategory).toEqual(true);
});

it("should be able to render CategoriesList component with not categories", async () => {
  mockCategories = [];

  const { getByTestId } = await render(
    <NavigationContainer>
      <CategoriesList />
    </NavigationContainer>
  );
});
