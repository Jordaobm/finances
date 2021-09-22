import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { UpdateDataContextProvider } from "./context/UpdateDataContext";
import { NavigationRoutes } from "./routes";
import Realm from "realm";

export const App = () => {
  return (
    <UpdateDataContextProvider>
      <NavigationContainer>
        <NavigationRoutes />
      </NavigationContainer>
    </UpdateDataContextProvider>
  );
};
