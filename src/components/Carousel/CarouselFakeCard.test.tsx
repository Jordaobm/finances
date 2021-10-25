import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";
import { CustomCarousel } from ".";
import { Card, Category } from "../../types";

let selectedCard: Card = {} as Card;

let wallet: Card =
  {
    id: "1",
    institutionName: "Carteira",
    colorBackground: "#282b46",
    colorText: "rgba(270,270,270,1)",
    currentValue: 90.6,
    name: "Carteira",
    colorBackgroundNumber: 47,
    colorTextNumber: 270,
  } || ({} as Card);

let cards: Card[] = [
  {
    id: "1633398954492",
    institutionName: "Caixa econômica",
    colorBackground: "rgba(1, 55, 148, 0.8)",
    colorText: "#ffffff",
    currentValue: 118.93000000000006,
    name: "JORDÃO B MASSARIOL",
    colorBackgroundNumber: 0,
    colorTextNumber: 275,
  },
  {
    id: "1633399445018",
    institutionName: "Nubank",
    colorBackground: "rgba(130, 10, 209, 1  )",
    colorText: "#ffffff",
    currentValue: 9428.31,
    name: "JORDÃO BEGHETTO MASSARIOL",
    colorBackgroundNumber: 177,
    colorTextNumber: 275,
  },
];

function onChangeCard(card: Card) {
  selectedCard = card;
}

function mockUseUpdateDataContext() {
  return {
    selectedCard,
    cards,
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

it("must be able to render FakeCard ", async () => {
  const { getByTestId } = await render(
    <CustomCarousel
      onChangeCard={() => {
        onChangeCard(cards[0]);
      }}
    />
  );

  expect(selectedCard).toEqual(cards[0]);
});
