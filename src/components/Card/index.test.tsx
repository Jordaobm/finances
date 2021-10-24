import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import renderer from "react-test-renderer";
import { CardComponent, FakeCard } from ".";
import { Card } from "../../types";
import { act } from "react-test-renderer";
jest.mock("react-native-toast-message", () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

jest.mock("../../context/UpdateDataContext", () => ({
  useUpdateDataContext() {
    let updateCard: Card = {} as Card;

    function setUpdateCard(card: Card) {
      updateCard = card;
    }

    return {
      setUpdateCard,
      updateCard,
    };
  },
}));

test("Component Card for Carteira", async () => {
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

  const tree = renderer
    .create(
      <NavigationContainer>
        <CardComponent card={card} />
      </NavigationContainer>
    )
    .toJSON();
  await act(async () => {
    expect(tree).toMatchSnapshot();
  });
});

test("Component Card for other cards", async () => {
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

  const tree = renderer
    .create(
      <NavigationContainer>
        <CardComponent card={card} />
      </NavigationContainer>
    )
    .toJSON();
  await act(async () => {
    expect(tree).toMatchSnapshot();
  });
});

test("Component Card for Fake Card", async () => {
  const tree = await renderer
    .create(
      <NavigationContainer>
        <FakeCard />
      </NavigationContainer>
    )
    .toJSON();
  await act(async () => {
    expect(tree).toMatchSnapshot();
  });
});
