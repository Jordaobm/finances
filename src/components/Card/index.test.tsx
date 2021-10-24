import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import renderer, { act } from "react-test-renderer";
import { CardComponent, FakeCard } from ".";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { Card } from "../../types";

jest.mock("react-native-toast-message", () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

const mockSetUpdateCard = jest.fn();

jest.mock("../../context/UpdateDataContext", () => {
  return {
    useUpdateDataContext() {
      return { setUpdateCard: mockSetUpdateCard };
    },
  };
});

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

test("Component Card selected Carteira", async () => {
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

  const { getByTestId } = render(
    <NavigationContainer>
      <CardComponent card={card} />
    </NavigationContainer>
  );

  fireEvent(getByTestId("walletContent"), "onPress");
  expect(mockSetUpdateCard).toBeCalled();
});

test("Component Card selected card", async () => {
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

  const { getByTestId } = render(
    <NavigationContainer>
      <CardComponent card={card} />
    </NavigationContainer>
  );

  fireEvent(getByTestId("cardContent"), "onPress");
  expect(mockSetUpdateCard).toBeCalled();
});

test("Component Card selected fakeCard", async () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <FakeCard />
    </NavigationContainer>
  );

  fireEvent(getByTestId("cardContent"), "onPress");
  expect(mockSetUpdateCard).toBeCalled();
});

test("Component Card selected fakeCard", async () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <FakeCard />
    </NavigationContainer>
  );

  fireEvent(getByTestId("addCard"), "onPress");
  expect(mockSetUpdateCard).toBeCalled();
});
