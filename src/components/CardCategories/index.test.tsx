import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { CardCategories } from ".";
import { Category } from "../../types";

jest.mock("react-native-toast-message", () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

let updateCategory: Category = {} as Category;

function setUpdateCategory(category: Category) {
  updateCategory = updateCategory;
}

let categories: Category[] = [
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
    updateCategory,
    setUpdateCategory,
    categories,
  };
}

jest.mock("../../context/UpdateDataContext", () => {
  return {
    useUpdateDataContext: mockUseUpdateDataContext,
  };
});

it("must be able to select a FakeCard", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <CardCategories categories={categories} />
    </NavigationContainer>
  );

  await fireEvent(
    getByTestId("addCategory"),
    "onPress",
    (updateCategory = categories[0])
  );
  await expect(updateCategory).toEqual(categories[0]);
});
