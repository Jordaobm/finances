import React from "react";

import { ContainerNavigation, Home } from "./styles";
import Svg, { Path } from "react-native-svg";
import {
  ChartIcon,
  HomeIcon,
  MoneyIcon,
  TagIcon,
  WalletIcon,
} from "../../icons/NavigationIcons";

interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
  return (
    <ContainerNavigation>
      <TagIcon color={"#595959"} />
      <WalletIcon color={"#595959"} />
      <Home>
        <HomeIcon color={"white"} />
      </Home>
      <ChartIcon color={"#595959"} />
      <MoneyIcon color={"#595959"} />
    </ContainerNavigation>
  );
};
