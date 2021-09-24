import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { ContainerInput, CustomInput } from "./styles";

interface InputProps extends TextInputProps {
  reference?: any;
}

export const Input = ({ reference, ...rest }: InputProps) => {
  const [active, setActive] = useState(false);

  return (
    <ContainerInput color={active ? "#3CC75E" : "#f5f5f5"}>
      <CustomInput
        ref={reference}
        placeholderTextColor="#c6c6c6"
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...rest}
      />
    </ContainerInput>
  );
};
