import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories";

const Navigation = createNativeStackNavigator();

export const NavigationRoutes = () => (
  <Navigation.Navigator screenOptions={{ headerShown: false }}>
    <Navigation.Screen name="Home" component={Home} />
    <Navigation.Screen name="Categories" component={Categories} />
  </Navigation.Navigator>
);
