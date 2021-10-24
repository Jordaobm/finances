import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import renderer, { act } from "react-test-renderer";
import { CardCategories } from ".";
import { Card, Category } from "../../types";

jest.mock("react-native-toast-message", () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

jest.mock("../../context/UpdateDataContext", () => ({
  useUpdateDataContext() {
    const operations = [
      {
        card: {
          colorBackground: "#282b46",
          colorBackgroundNumber: 47,
          colorText: "rgba(270,270,270,1)",
          colorTextNumber: 270,
          currentValue: 90.6,
          id: "1",
          institutionName: "Carteira",
          name: "Carteira",
        },
        category: {
          accumuledValue: 500,
          color: "rgba(197, 48, 48, 1  )",
          id: "1635000545505",
          name: "Dinheiro da vovó",
          number: 191.3680076599121,
        },
        date: "23/10/2021",
        for: {},
        id: "1635000577024",
        name: "Dinheiro da vovó",
        origin: {},
        type: "OUTPUT",
        value: 500,
      },
    ];

    let updateCategory: Category = {} as Category;

    function setUpdateCategory(category: Category) {
      updateCategory = category;
    }

    return {
      operations,
      setUpdateCategory,
    };
  },
}));

{
}

test("Component CardCategories", async () => {
  const categories: Category[] = [
    {
      accumuledValue: 500,
      color: "rgba(197, 48, 48, 1  )",
      id: "1635000545505",
      name: "Dinheiro da vovó",
      number: 191.3680076599121,
    },
  ];

  const tree = renderer
    .create(
      <NavigationContainer>
        <CardCategories categories={categories} />
      </NavigationContainer>
    )
    .toJSON();
  await act(async () => {
    expect(tree).toMatchSnapshot();
  });
});
