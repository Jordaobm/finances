import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ToastWrapper from "react-native-toast-message";
import { CardForm } from "../pages/CardForm";
import { Cards } from "../pages/Cards";
import { Categories } from "../pages/Categories";
import { CategoryForm } from "../pages/CategoryForm";
import { Home } from "../pages/Home";
import { OperationForm } from "../pages/OperationForm";

const Navigation = createNativeStackNavigator();

export const NavigationRoutes = () => {
  return (
    <>
      <Navigation.Navigator screenOptions={{ headerShown: false }}>
        <Navigation.Screen name="Home" component={Home} />
        <Navigation.Screen name="Categories" component={Categories} />
        <Navigation.Screen name="CategoryForm" component={CategoryForm} />
        <Navigation.Screen name="Cards" component={Cards} />
        <Navigation.Screen name="CardForm" component={CardForm} />
        <Navigation.Screen name="OperationForm" component={OperationForm} />
      </Navigation.Navigator>
      <ToastWrapper ref={(ref) => ToastWrapper.setRef(ref)} />
    </>
  );
};
