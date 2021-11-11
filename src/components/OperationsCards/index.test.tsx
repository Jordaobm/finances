import { render } from "@testing-library/react-native";
import React from "react";
import { OperationsCards } from ".";
import { mockOperations } from "../../tests/mocksForTests";

function mockUseUpdateDataContext() {
  return {
    operations: mockOperations,
  };
}

jest.mock("../../context/UpdateDataContext", () => {
  return {
    useUpdateDataContext: mockUseUpdateDataContext,
  };
});

jest.mock("react-native-toast-message", () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

jest.mock("react-native-linear-gradient", () => "LinearGradient");

it("should be able to render OperationsCards", async () => {
  const { getByTestId } = await render(<OperationsCards />);
});
