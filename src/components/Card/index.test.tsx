import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { CardComponent, FakeCard } from ".";
import { Card } from "../../types";

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

let updateCard: Card = {} as Card;

function setUpdateCard(card: Card) {
  updateCard = card;
}

function mockUseUpdateDataContext() {
  return {
    updateCard,
    setUpdateCard,
  };
}

jest.mock("../../context/UpdateDataContext", () => {
  return {
    useUpdateDataContext: mockUseUpdateDataContext,
  };
});

it("must be able to select the wallet", async () => {
  const card: Card = {
    id: "01",
    colorBackground: "#f4f4",
    colorText: "#fff",
    currentValue: 500,
    institutionName: "Carteira",
    name: "Carteira",
    colorBackgroundNumber: 100,
    colorTextNumber: 100,
  };

  const { getByTestId } = await render(
    <NavigationContainer>
      <CardComponent card={card} />
    </NavigationContainer>
  );

  let { updateCard } = mockUseUpdateDataContext();

  await fireEvent(getByTestId("selectWallet"), "onPress", (updateCard = card));
  await expect(updateCard).toEqual(card);
});

it("must be able to select a card", async () => {
  const card: Card = {
    id: `${new Date().getTime()}`,
    colorBackground: "#f4f4",
    colorText: "#fff",
    currentValue: 500,
    institutionName: "Nubank",
    name: "Nubank",
    colorBackgroundNumber: 100,
    colorTextNumber: 100,
  };

  const { getByTestId } = await render(
    <NavigationContainer>
      <CardComponent card={card} />
    </NavigationContainer>
  );

  let { updateCard } = mockUseUpdateDataContext();

  await fireEvent(getByTestId("selectCard"), "onPress", (updateCard = card));
  await expect(updateCard).toEqual(card);
});

it("must be able to select a FakeCard", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <FakeCard />
    </NavigationContainer>
  );

  await fireEvent(getByTestId("selectFakeCard"), "onPress");
});

it("must be able to select a FakeCard", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <FakeCard />
    </NavigationContainer>
  );

  await fireEvent(getByTestId("addCard"), "onPress");
});
