import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { format, isBefore, lastDayOfMonth, startOfMonth } from "date-fns";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import Toast from "react-native-toast-message";
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
  getOperationForFilter,
  getOperations,
} from "../services/realm";
import { Config } from "../types";
import { extractCategoriesByOperations } from "../utils/extractCategoriesByOperations";
import { stringToDate } from "../utils/formatDate";
import { monthAndYearToDate } from "../utils/monthAndYearToDate";

const Navigation = createNativeStackNavigator();

export const NavigationRoutes = () => {
  const {
    setCategories,
    setConfig,
    setCards,
    setWallet,
    setOperations,
    setPageChartOperationsByFilter,
    setPageChartCategoriesByFilter,
    setFormChartFilter,
    updateConfig,
  } = useUpdateDataContext();

  useEffect(async () => {
    setCategories(await getCategories().then((data) => data));
    let cfg = await getConfiguration().then((data) => data);

    // verificar se o mês mudou

    if (cfg?.lastDayMonth) {
      const lastDataCfg = stringToDate(cfg?.lastDayMonth);
      const initialData = startOfMonth(new Date());

      if (isBefore(lastDataCfg, initialData)) {
        Toast.show({
          type: "success",
          text1: "Atualização de datas",
          text2: `O mês virou e resolvemos atualizar suas configurações de datas para o mês atual`,
          autoHide: true,
        });

        const newCfg: Config = {
          firstDayMonth: format(startOfMonth(new Date()), "dd/MM/yyyy"),
          lastDayMonth: format(lastDayOfMonth(new Date()), "dd/MM/yyyy"),
          monthYear: `${
            new Date()?.getMonth() + 1
          }/${new Date()?.getFullYear()}`,
          id: cfg?.id,
        };

        updateConfig(newCfg);

        cfg = newCfg;
      }
    }

    setConfig(cfg);
    setCards(await getCards().then((data) => data));
    setWallet(await getCarteira().then((data) => data));
    setOperations(await getOperations().then((data) => data));

    const operationsForChart = await getOperationForFilter({
      initialDate: cfg?.firstDayMonth || "",
      finishDate: cfg?.lastDayMonth || "",
    });

    if (cfg?.firstDayMonth && cfg?.lastDayMonth) {
      setFormChartFilter({
        initialDate: cfg.firstDayMonth,
        finishDate: cfg.lastDayMonth,
      });
    }

    setPageChartOperationsByFilter(operationsForChart);

    setPageChartCategoriesByFilter(
      extractCategoriesByOperations(operationsForChart)
    );

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
