import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Categories } from "../pages/Categories";
import { CategoryForm } from "../pages/CategoryForm";
import { Home } from "../pages/Home";

const Navigation = createNativeStackNavigator();

export const NavigationRoutes = () => {
  return (
    <Navigation.Navigator screenOptions={{ headerShown: false }}>
      <Navigation.Screen name="Home" component={Home} />
      <Navigation.Screen name="Categories" component={Categories} />
      <Navigation.Screen name="CategoryForm" component={CategoryForm} />
    </Navigation.Navigator>
  );
};
