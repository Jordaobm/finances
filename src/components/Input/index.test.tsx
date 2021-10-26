import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { Input } from ".";

it("should be able to render Input component", async () => {
  const { getByTestId } = render(<Input />);

  fireEvent(getByTestId("input"), "onFocus");
  fireEvent(getByTestId("input"), "onBlur");
});

it("should be able to render Input maskDate component", async () => {
  const { getByTestId } = render(<Input maskDate />);

  fireEvent(getByTestId("input"), "onFocus");
  fireEvent(getByTestId("input"), "onBlur");
});

it("should be able to render Input maskMonth component", async () => {
  const { getByTestId } = render(<Input maskMonth />);

  fireEvent(getByTestId("input"), "onFocus");
  fireEvent(getByTestId("input"), "onBlur");
});

it("should be able to render Input money component", async () => {
  const { getByTestId } = render(<Input money />);

  fireEvent(getByTestId("input"), "onFocus");
  fireEvent(getByTestId("input"), "onBlur");
});

it("should be able to render Input disabledStyle component", async () => {
  const { getByTestId } = render(<Input disabledStyle />);
});
