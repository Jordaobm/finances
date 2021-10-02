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

export const Navigation = ({
  activeRoute,
  activeColor = "rgba(1, 55, 148, 0.8)",
  onNavigate,
}: NavigationProps) => {
  const navigation = useNavigation();

  return (
    <Content
      colors={[
        "rgba(255, 255, 255, 0.0)",
        "rgba(255, 255, 255, 0.4)",
        "rgba(255, 255, 255, 0.8)",
        "rgba(255, 255, 255, 1)",
      ]}
    >
      <NavigationButton
        onPress={() => {
          onNavigate && onNavigate();
          navigation.navigate("Categories");
        }}
      >
        <TagIcon
          color={activeRoute === "Categories" ? activeColor : "#595959"}
        />
      </NavigationButton>
      <NavigationButton
        onPress={() => {
          onNavigate && onNavigate();
          navigation.navigate("Cards");
        }}
      >
        <WalletIcon color={activeRoute === "Cards" ? activeColor : "#595959"} />
      </NavigationButton>

      <NavigationButton
        onPress={() => {
          onNavigate && onNavigate();
          navigation.navigate("Home");
        }}
      >
        <Home color={activeColor}>
          <HomeIcon color={"white"} />
        </Home>
      </NavigationButton>

      <NavigationButton
        onPress={() => {
          onNavigate && onNavigate();
          navigation.navigate("Operation");
        }}
      >
        <MoneyIcon
          color={activeRoute === "Operation" ? activeColor : "#595959"}
        />
      </NavigationButton>

      <NavigationButton>
        <ChartIcon color={"#595959"} />
      </NavigationButton>
    </Content>
  );
};
