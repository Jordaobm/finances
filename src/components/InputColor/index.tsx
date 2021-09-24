import React, { useCallback, useEffect, useState } from "react";
import {
  BoxColor,
  BoxInputColor,
  Circle,
  Container,
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
    if (!palette) {
      return (
        "#" +
        Math.floor((value / 300) * 16777215)
          .toString(16)
          .padStart(6, "0")
      );
    }

    return `rgba(${value},${value},${value},1)`;
  }

  return (
    <>
      <Container>
        <Placeholder>{placeholder}</Placeholder>
        <BoxColor color={color} />
      </Container>
      <BoxInputColor>
        <Line />
        <Circle
          x={valor()}
          y={4}
          renderSize={25}
          renderColor="#595959"
          renderText=""
          isCircle
          minY={4}
          maxY={4}
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
    </>
  );
};
