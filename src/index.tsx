import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { NavigationRoutes } from "./routes";

export const App = () => {
  return (
    <NavigationContainer>
      <NavigationRoutes />
    </NavigationContainer>
  );
};
