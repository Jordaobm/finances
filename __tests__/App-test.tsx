/**
 * @format
 */

import "react-native";
import React from "react";
import { App } from "../src";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

jest.mock("react-native-toast-message", () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

it("renders correctly", () => {
  renderer.create(<App />);
});
