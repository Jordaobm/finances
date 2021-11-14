import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import { Header } from ".";
import React from "react";

it("should be able to render Header component", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <Header color="#595959" receivedDate={new Date("2021-11-13")} />
    </NavigationContainer>
  );

  fireEvent(getByTestId("navigateToConfiguration"), "onPress");
});

it("should be able to render Header component other date", async () => {
  const { getByTestId } = await render(
    <NavigationContainer>
      <Header color="#595959" receivedDate={new Date("2021-10-25")} />
    </NavigationContainer>
  );

  fireEvent(getByTestId("navigateToConfiguration"), "onPress");
});
