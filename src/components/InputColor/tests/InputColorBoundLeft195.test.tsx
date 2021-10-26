import { render } from "@testing-library/react-native";
import React from "react";
import { InputColor } from "..";

const event = null;
const gestureState = null;
let bounds = { left: 195 };

jest.mock("react-native-draggable", () => {
  function Draggable({
    x,
    y,
    renderSize,
    renderColor,
    renderText,
    isCircle,
    minY,
    maxY,
    minX,
    maxX,
    onDragRelease,
  }: any) {
    onDragRelease(event, gestureState, bounds);
    return <></>;
  }

  return Draggable;
});

it("should be able to render InputColor with a bound.left = 195", async () => {
  let color = "#fff";
  let number = 0;

  function onChangeColor(color: string, number: number) {
    (color = color), (number = number);
  }

  const {} = render(
    <InputColor
      onChangeColor={onChangeColor}
      initialColor={color}
      initialNumber={number}
    />
  );
});
