import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { CardCategories } from ".";
import { mockCategories, mockOperations } from "../../tests/mocksForTests";
import { Category, Operation } from "../../types";

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

function mockUseUpdateDataContext() {
  return {
    updateCategory,
    setUpdateCategory,
    categories: mockCategories,
    operations: mockOperations,
  };
}

jest.mock("../../context/UpdateDataContext", () => {
  return {
    useUpdateDataContext: mockUseUpdateDataContext,
  };
});

it("should be able to render CardCategories", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <CardCategories categories={[mockCategories[0]]} />
    </NavigationContainer>
  );

  await fireEvent(
    getByTestId("addCategory"),
    "onPress",
    (updateCategory = mockCategories[0])
  );
  await expect(updateCategory).toEqual(mockCategories[0]);
});

it("should be able to render CardCategories with not operations by category", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <CardCategories categories={mockCategories} />
    </NavigationContainer>
  );
});
