import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { NavigationBar } from ".";

jest.mock("react-native-linear-gradient", () => "LinearGradient");

it("should be able to render navigationBar", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <NavigationBar
        activeRoute="Home"
        activeColor="#ccc"
        onNavigate={() => {}}
      />
    </NavigationContainer>
  );
});

it("should be able to render navigationBar and navigate to Categories", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <NavigationBar
        activeRoute="Categories"
        activeColor="#ccc"
        onNavigate={() => {}}
      />
    </NavigationContainer>
  );

  fireEvent(getByTestId("navigateCategories"), "onPress");
});

it("should be able to render navigationBar and navigate to Cards", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <NavigationBar
        activeRoute="Cards"
        activeColor="#ccc"
        onNavigate={() => {}}
      />
    </NavigationContainer>
  );

  fireEvent(getByTestId("navigateCards"), "onPress");
});

it("should be able to render navigationBar and navigate to Home", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <NavigationBar
        activeRoute="Home"
        activeColor="#ccc"
        onNavigate={() => {}}
      />
    </NavigationContainer>
  );

  fireEvent(getByTestId("navigateHome"), "onPress");
});

it("should be able to render navigationBar and navigate to Operation", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <NavigationBar
        activeRoute="Operation"
        activeColor="#ccc"
        onNavigate={() => {}}
      />
    </NavigationContainer>
  );

  fireEvent(getByTestId("navigateOperation"), "onPress");
});

it("should be able to render navigationBar and navigate to Charts", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <NavigationBar
        activeRoute="Charts"
        activeColor="#ccc"
        onNavigate={() => {}}
      />
    </NavigationContainer>
  );

  fireEvent(getByTestId("navigateCharts"), "onPress");
});

it("should be able to render the navigation bar without the active color ", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <NavigationBar activeRoute="Home" onNavigate={() => {}} />
    </NavigationContainer>
  );

  fireEvent(getByTestId("navigateCharts"), "onPress");
});
