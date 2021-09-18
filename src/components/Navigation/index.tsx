import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  ChartIcon,
  HomeIcon,
  MoneyIcon,
  TagIcon,
  WalletIcon,
} from "../../icons/NavigationIcons";
import { NavigationProps } from "../../types";
import { ContainerNavigation, Home, NavigationButton } from "./styles";

export const Navigation = ({ activeRoute }: NavigationProps) => {
  const navigation = useNavigation();

  return (
    <ContainerNavigation>
      <NavigationButton onPress={() => navigation.navigate("Categories")}>
        <TagIcon
          color={
            activeRoute === "Categories" ? "rgba(1, 55, 148, 0.8)" : "#595959"
          }
        />
      </NavigationButton>
      <NavigationButton>
        <WalletIcon color={"#595959"} />
      </NavigationButton>

      <NavigationButton onPress={() => navigation.navigate("Home")}>
        <Home
          color={activeRoute === "Home" ? "rgba(1, 55, 148, 0.8)" : "#595959"}
        >
          <HomeIcon color={"white"} />
        </Home>
      </NavigationButton>

      <NavigationButton>
        <ChartIcon color={"#595959"} />
      </NavigationButton>

      <NavigationButton>
        <MoneyIcon color={"#595959"} />
      </NavigationButton>
    </ContainerNavigation>
  );
};
