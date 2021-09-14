import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { Home } from "./pages/Home";
import { NavigationRoutes } from "./routes";

export const App = () => {
  return (
    <NavigationContainer>
      <NavigationRoutes />
    </NavigationContainer>
  );
};
