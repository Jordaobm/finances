import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { SelectOption } from "../../types";
import { Container } from "./styles";

interface SelectProps {
  items: SelectOption[];
  placeholder?: string;
  onValueChange: (value: string) => void;
  value: string;
}

export const Select = ({
  items,
  placeholder,
  onValueChange,
  value,
}: SelectProps) => {
  return (
    <Container>
      <RNPickerSelect
        value={items.find((e) => e?.value === value)?.value}
        placeholder={{ label: placeholder }}
        onValueChange={onValueChange}
        items={items}
      />
    </Container>
  );
};
