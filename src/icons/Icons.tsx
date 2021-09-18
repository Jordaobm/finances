import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";

export const PlusIcon = ({ color }: IconProps) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M6 10H14"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 14V6"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
