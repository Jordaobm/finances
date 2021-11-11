import { render } from "@testing-library/react-native";
import React from "react";
import { Select } from ".";
import { SelectOption } from "../../types";

jest.mock("react-native-picker-select", () => "RNPickerSelect");

it("should be able to render Select", async () => {
  const items: SelectOption[] = [{ label: "1", value: "1", id: "1" }];

  const { getByTestId } = await render(
    <Select
      items={items}
      onValueChange={(item) => console.log(item)}
      value={items[0]?.value}
      placeholder="Select"
    />
  );
});
