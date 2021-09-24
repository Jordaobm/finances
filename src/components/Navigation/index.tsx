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
import { Content, Home, NavigationButton } from "./styles";

export const Navigation = ({ activeRoute }: NavigationProps) => {
  const navigation = useNavigation();

  return (
    <Content
      colors={[
        "rgba(255, 255, 255, 0.0)",
        "rgba(255, 255, 255, 0.5)",
        "rgba(255, 255, 255, 1)",
      ]}
    >
      <NavigationButton onPress={() => navigation.navigate("Categories")}>
        <TagIcon
          color={
            activeRoute === "Categories" ? "rgba(1, 55, 148, 0.8)" : "#595959"
          }
        />
      </NavigationButton>
      <NavigationButton onPress={() => navigation.navigate("Cards")}>
        <WalletIcon
          color={activeRoute === "Cards" ? "rgba(1, 55, 148, 0.8)" : "#595959"}
        />
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
    </Content>
  );
};
