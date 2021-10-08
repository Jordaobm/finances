import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import ToastWrapper from "react-native-toast-message";
import { useUpdateDataContext } from "../context/UpdateDataContext";
import { CardForm } from "../pages/CardForm";
import { Cards } from "../pages/Cards";
import { Categories } from "../pages/Categories";
import { CategoryForm } from "../pages/CategoryForm";
import { Charts } from "../pages/Charts";
import { Configuration } from "../pages/Configuration";
import { Home } from "../pages/Home";
import { Operation } from "../pages/Operation";
import { OperationForm } from "../pages/OperationForm";
import {
  getCards,
  getCarteira,
  getCategories,
  getConfiguration,
  getOperations,
} from "../services/realm";

const Navigation = createNativeStackNavigator();

export const NavigationRoutes = () => {
  const { setCategories, setConfig, setCards, setWallet, setOperations } =
    useUpdateDataContext();

  useEffect(async () => {
    setCategories(await getCategories().then((data) => data));
    setConfig(await getConfiguration().then((data) => data));
    setCards(await getCards().then((data) => data));
    setWallet(await getCarteira().then((data) => data));
    setOperations(await getOperations().then((data) => data));

    SplashScreen.hide();
  }, []);

  return (
    <>
      <Navigation.Navigator screenOptions={{ headerShown: false }}>
        <Navigation.Screen name="Home" component={Home} />
        <Navigation.Screen name="Categories" component={Categories} />
        <Navigation.Screen name="CategoryForm" component={CategoryForm} />
        <Navigation.Screen name="CardForm" component={CardForm} />
        <Navigation.Screen name="OperationForm" component={OperationForm} />
        <Navigation.Screen name="Cards" component={Cards} />
        <Navigation.Screen name="Configuration" component={Configuration} />
        <Navigation.Screen name="Operation" component={Operation} />
        <Navigation.Screen name="Charts" component={Charts} />
      </Navigation.Navigator>
      <ToastWrapper ref={(ref) => ToastWrapper.setRef(ref)} />
    </>
  );
};
