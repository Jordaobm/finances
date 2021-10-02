import React, { useCallback, useEffect, useState } from "react";
import {
  BoxColor,
  BoxInputColor,
  Circle,
  Container,
  Content,
  Line,
  Placeholder,
} from "./styles";
import {
  Alert,
  GestureResponderEvent,
  PanResponderGestureState,
  Text,
  View,
} from "react-native";
import { hexToRgb } from "../../utils/colors";

interface InputColorProps {
  onChangeColor: (color: string, number: number) => void;
  initialColor: string;
  initialNumber: number;
  placeholder?: string;
  palette?: boolean;
}

export const InputColor = ({
  onChangeColor,
  initialColor,
  initialNumber,
  placeholder,
  palette,
}: InputColorProps) => {
  const [color, setColor] = useState(
    initialColor ? initialColor : "rgba(1, 55, 148, 0.8)"
  );
  const valor = useCallback(() => {
    return initialNumber;
  }, []);

  function generateColor(value: number) {
    if (value >= 150 && value < 160) {
      return hexToRgb("#F6E05E", "1");
    }

    if (value >= 190 && value < 200) {
      return hexToRgb("#C53030", "1");
    }

    if (value >= 170 && value < 180) {
      return hexToRgb("#805AD5", "1");
    }

    if (!palette) {
      return (
        "#" +
        Math.floor((value / 300) * 16777215)
          .toString(16)
          .padStart(6, "0")
      );
    }

    return `rgba(${Math.round(value)},${Math.round(value)},${Math.round(
      value
    )},1)`;
  }

  return (
    <>
      <Container>
        <Placeholder>{placeholder}</Placeholder>
        <BoxColor color={color} />
      </Container>
      <Content>
        <BoxInputColor>
          <Line />
          <Circle
            x={valor()}
            y={1}
            renderSize={30}
            renderColor="#595959"
            renderText=""
            isCircle
            minY={1}
            maxY={1}
            minX={0}
            maxX={300}
            onDragRelease={(event, gestureState, bounds) => {
              let value = bounds.left;
              if (value === 0) {
                if (palette) {
                  setColor("rgba(0, 0, 0,1)");
                } else {
                  setColor("rgba(1, 55, 148, 0.8)");
                  return;
                }
              }
              setColor(generateColor(value));
              onChangeColor(generateColor(value), value);
            }}
          />
        </BoxInputColor>
      </Content>
    </>
  );
};
