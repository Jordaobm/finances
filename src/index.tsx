import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { UpdateDataContextProvider } from "./context/UpdateDataContext";
import { NavigationRoutes } from "./routes";

export const App = () => {
  return (
    <UpdateDataContextProvider>
      <NavigationContainer>
        <NavigationRoutes />
      </NavigationContainer>
    </UpdateDataContextProvider>
  );
};
