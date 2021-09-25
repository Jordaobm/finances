import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { ContainerInput, CustomInput, InputDate } from "./styles";

interface InputProps extends TextInputProps {
  reference?: any;
  maskDate?: boolean;
}

export const Input = ({ reference, maskDate, ...rest }: InputProps) => {
  const [active, setActive] = useState(false);

  if (maskDate) {
    return (
      <ContainerInput color={active ? "#3CC75E" : "#f5f5f5"}>
        <InputDate
          type={"datetime"}
          options={{
            format: "DD/MM/YYYY",
          }}
          ref={reference}
          placeholderTextColor="#c6c6c6"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          {...rest}
        />
      </ContainerInput>
    );
  }

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
