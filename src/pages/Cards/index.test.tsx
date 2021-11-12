import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { Cards } from ".";
import { mockCards } from "../../tests/mocksForTests";
import { Card } from "../../types";
import React from "react";

let selectedCard: Card = {} as Card;

let cards: Card[] = [];

let wallet: Card = {} as Card;

function setSelectedCard(value: Card) {
  selectedCard = value;
}

function setCards(values: Card[]) {
  cards = values;
}

function setWallet(value: Card) {
  wallet = value;
}

function mockUseUpdateDataContext() {
  return {
    selectedCard,
    setSelectedCard,
    cards,
    setCards,
    setWallet,
    wallet,
  };
}

jest.mock("../../context/UpdateDataContext", () => {
  return {
    useUpdateDataContext: mockUseUpdateDataContext,
  };
});

jest.mock("react-native-snap-carousel", () => {
  function Carousel({ onSnapToItem, renderItem }: any) {
    onSnapToItem();
    renderItem({
      item: {},
      index: 2,
    });
    return <></>;
  }

  return Carousel;
});

jest.mock("react-native-linear-gradient", () => "LinearGradient");

it("should be able to render Cards page", () => {
  setCards(mockCards);
  setWallet(mockCards[0]);
  setSelectedCard(mockCards[0]);

  const {} = render(
    <NavigationContainer>
      <Cards />
    </NavigationContainer>
  );
});

it("should be able to render Cards page with selected Wallet", () => {
  setCards(mockCards);
  setWallet(mockCards[0]);
  setSelectedCard(mockCards[1]);

  const {} = render(
    <NavigationContainer>
      <Cards />
    </NavigationContainer>
  );
});

it("should be able to render Cards page with selected Card", () => {
  setCards([]);
  setWallet({} as Card);
  setSelectedCard({} as Card);
  const {} = render(
    <NavigationContainer>
      <Cards />
    </NavigationContainer>
  );
});
