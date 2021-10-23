import React from "react";
import renderer from "react-test-renderer";
import { CustomAutocomplete } from ".";
import { AutocompleteOption } from "../../types";

jest.mock("react-native-autocomplete-input", () => "Autocomplete");

test("Component CustomAutocomplete", () => {
  const data: AutocompleteOption[] = [
    {
      label: "1",
      value: "1",
      id: "1",
    },
    {
      label: "2",
      value: "2",
      id: "2",
    },
  ];

  const tree = renderer
    .create(<CustomAutocomplete data={data} placeholder="Teste" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
