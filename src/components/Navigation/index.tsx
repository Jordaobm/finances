import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  ChartIcon,
  HomeIcon,
  MoneyIcon,
  TagIcon,
  WalletIcon,
} from "../../icons/NavigationIcons";
import { NavigationProps } from "../../types";
import { Home } from "./styles";

export const NavigationBar = ({
  activeRoute,
  activeColor = "rgba(1, 55, 148, 0.8)",
  onNavigate,
}: NavigationProps) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0 64px",
        height: 58,
        alignItems: "flex-end",
        paddingBottom: 23,
      }}
      colors={[
        "rgba(255, 255, 255, 0.0)",
        "rgba(255, 255, 255, 0.4)",
        "rgba(255, 255, 255, 0.8)",
        "rgba(255, 255, 255, 1)",
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          onNavigate && onNavigate();
          navigation.navigate("Categories");
        }}
        testID="navigateCategories"
      >
        <TagIcon
          color={activeRoute === "Categories" ? activeColor : "#595959"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        testID="navigateCards"
        onPress={() => {
          onNavigate && onNavigate();
          navigation.navigate("Cards");
        }}
      >
        <WalletIcon color={activeRoute === "Cards" ? activeColor : "#595959"} />
      </TouchableOpacity>

      <TouchableOpacity
        testID="navigateHome"
        onPress={() => {
          onNavigate && onNavigate();
          navigation.navigate("Home");
        }}
      >
        <Home color={activeColor}>
          <HomeIcon color={"white"} />
        </Home>
      </TouchableOpacity>

      <TouchableOpacity
        testID="navigateOperation"
        onPress={() => {
          onNavigate && onNavigate();
          navigation.navigate("Operation");
        }}
      >
        <MoneyIcon
          color={activeRoute === "Operation" ? activeColor : "#595959"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        testID="navigateCharts"
        onPress={() => {
          onNavigate && onNavigate();
          navigation.navigate("Charts");
        }}
      >
        <ChartIcon color={activeRoute === "Charts" ? activeColor : "#595959"} />
      </TouchableOpacity>
    </LinearGradient>
  );
};
