import { fireEvent, render } from "@testing-library/react-native";
import { FlatListOperations } from ".";
import { Card, Operation } from "../../types";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

let mockOperation: Operation[] = [
  {
    card: {
      colorBackground: "#282b46",
      colorBackgroundNumber: 47,
      colorText: "rgba(270,270,270,1)",
      colorTextNumber: 270,
      currentValue: 1900,
      id: "1",
      institutionName: "Carteira",
      name: "Carteira",
    },
    category: {
      accumuledValue: 3000,
      color: "#20b404",
      id: "1635200733492",
      name: "Salário",
      number: 38.32405090332031,
    },
    date: "25/10/2021",
    for: {} as Card,
    id: "1635200759551",
    name: "Salário",
    origin: {} as Card,
    type: "INPUT",
    value: 3000,
  },
  {
    card: {
      colorBackground: "#282b46",
      colorBackgroundNumber: 47,
      colorText: "rgba(270,270,270,1)",
      colorTextNumber: 270,
      currentValue: 1900,
      id: "1",
      institutionName: "Carteira",
      name: "Carteira",
    },
    category: {
      accumuledValue: 100,
      color: "#d4183f",
      id: "1635202199541",
      name: "Mercado",
      number: 248.54851531982422,
    },
    date: "25/10/2021",
    for: {} as Card,
    id: "1635202223309",
    name: "Mercado",
    origin: {} as Card,
    type: "OUTPUT",
    value: 100,
  },
  {
    card: {
      colorBackground: "rgba(130, 10, 209, 1  )",
      colorBackgroundNumber: 178,
      colorText: "#ffffff",
      colorTextNumber: 275,
      currentValue: 3000,
      id: "1635202453826",
      institutionName: "Nubank",
      name: "Jordao Beghetto Massariol",
    },
    category: {
      accumuledValue: 1000,
      color: "#e63ead",
      id: "1635202480825",
      name: "Transferencia",
      number: 269.81818199157715,
    },
    date: "25/10/2021",
    for: {
      colorBackground: "rgba(130, 10, 209, 1  )",
      colorBackgroundNumber: 178,
      colorText: "#ffffff",
      colorTextNumber: 275,
      currentValue: 3000,
      id: "1635202453826",
      institutionName: "Nubank",
      name: "Jordao Beghetto Massariol",
    },
    id: "1635202510964",
    name: "Transferencia",
    origin: {
      colorBackground: "#282b46",
      colorBackgroundNumber: 47,
      colorText: "rgba(270,270,270,1)",
      colorTextNumber: 270,
      currentValue: 1900,
      id: "1",
      institutionName: "Carteira",
      name: "Carteira",
    },
    type: "POUPED",
    value: 1000,
  },
  {
    card: {
      colorBackground: "rgba(130, 10, 209, 1  )",
      colorBackgroundNumber: 178,
      colorText: "#ffffff",
      colorTextNumber: 275,
      currentValue: 3000,
      id: "1635202453826",
      institutionName: "",
      name: "Jordao Beghetto Massariol",
    },
    category: {
      accumuledValue: 1000,
      color: "#e63ead",
      id: "1635202480825",
      name: "Transferencia",
      number: 269.81818199157715,
    },
    date: "25/10/2021",
    for: {
      colorBackground: "rgba(130, 10, 209, 1  )",
      colorBackgroundNumber: 178,
      colorText: "#ffffff",
      colorTextNumber: 275,
      currentValue: 3000,
      id: "1635202453826",
      institutionName: "",
      name: "Jordao Beghetto Massariol",
    },
    id: "1234567890",
    name: "Transferencia",
    origin: {
      colorBackground: "#282b46",
      colorBackgroundNumber: 47,
      colorText: "rgba(270,270,270,1)",
      colorTextNumber: 270,
      currentValue: 1900,
      id: "1",
      institutionName: "",
      name: "Carteira",
    },
    type: "POUPED",
    value: 1000,
  },
];

let mockUpdateOperation: Operation = {} as Operation;

function mockSetUpdateOperation(operation: Operation) {
  mockUpdateOperation = operation;
}

function mockUseUpdateDataContext() {
  return {
    operations: mockOperation,
    setUpdateOperation: mockSetUpdateOperation,
    updateOperation: mockUpdateOperation,
  };
}

jest.mock("../../context/UpdateDataContext", () => {
  return { useUpdateDataContext: mockUseUpdateDataContext };
});

it("should be able to render FlatListOperations", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <FlatListOperations />
    </NavigationContainer>
  );
});

it("should be able to render FlatListOperations with listOperations", async () => {
  const listOperations: Operation[] = [
    {
      card: {
        colorBackground: "#282b46",
        colorBackgroundNumber: 47,
        colorText: "rgba(270,270,270,1)",
        colorTextNumber: 270,
        currentValue: 2900,
        id: "1",
        institutionName: "Carteira",
        name: "Carteira",
      },
      category: {
        accumuledValue: 3000,
        color: "#20b404",
        id: "1635200733492",
        name: "Salário",
        number: 38.32405090332031,
      },
      date: "25/10/2021",
      for: {} as Card,
      id: "1635200759551",
      name: "Salário",
      origin: {} as Card,
      type: "INPUT",
      value: 3000,
    },
    {
      card: {
        colorBackground: "#282b46",
        colorBackgroundNumber: 47,
        colorText: "rgba(270,270,270,1)",
        colorTextNumber: 270,
        currentValue: 2900,
        id: "1",
        institutionName: "Carteira",
        name: "Carteira",
      },
      category: {
        accumuledValue: 100,
        color: "#d4183f",
        id: "1635202199541",
        name: "Mercado",
        number: 248.54851531982422,
      },
      date: "25/10/2021",
      for: {} as Card,
      id: "1635202223309",
      name: "Mercado",
      origin: {} as Card,
      type: "OUTPUT",
      value: 100,
    },
  ];

  const { getByTestId } = await render(
    <NavigationContainer>
      <FlatListOperations listOperations={listOperations} />
    </NavigationContainer>
  );
});

it("should be able to render FlatListOperations on card page", async () => {
  const card: Card = {
    colorBackground: "#282b46",
    colorBackgroundNumber: 47,
    colorText: "rgba(270,270,270,1)",
    colorTextNumber: 270,
    currentValue: 3000,
    id: "1",
    institutionName: "Carteira",
    name: "Carteira",
  };

  const { getByTestId } = await render(
    <NavigationContainer>
      <FlatListOperations card={card} />
    </NavigationContainer>
  );
});

it("should be able to render FlatListOperations and select operation for editing", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <FlatListOperations />
    </NavigationContainer>
  );

  fireEvent(
    getByTestId("FlatListOperationItemAddOperation-1635200759551"),
    "onPress"
  );

  expect(mockUpdateOperation).toEqual(
    mockOperation.find((operation) => operation?.id === "1635200759551")
  );
});

it("should be able to render FlatListOperations and change text, color, padding and border", async () => {
  mockOperation = [];
  const { getByTestId } = await render(
    <NavigationContainer>
      <FlatListOperations
        operationText="Last Operations"
        color="#cccc"
        smallPadding
      />
    </NavigationContainer>
  );

  fireEvent(getByTestId("addOperation"), "onPress");
});
