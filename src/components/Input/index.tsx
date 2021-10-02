import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { ContainerInput, CustomInput, InputStyle } from "./styles";

interface InputProps extends TextInputProps {
  reference?: any;
  maskDate?: boolean;
  money?: boolean;
  maskMonth?: boolean;
}

export const Input = ({
  reference,
  maskDate,
  money,
  maskMonth,
  ...rest
}: InputProps) => {
  const [active, setActive] = useState(false);

  if (maskDate) {
    return (
      <ContainerInput color={active ? "#3CC75E" : "#f5f5f5"}>
        <InputStyle
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

  if (maskMonth) {
    return (
      <ContainerInput color={active ? "#3CC75E" : "#f5f5f5"}>
        <InputStyle
          type={"datetime"}
          options={{
            format: "MM/YYYY",
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

  if (money) {
    return (
      <ContainerInput color={active ? "#3CC75E" : "#f5f5f5"}>
        <InputStyle
          type={"money"}
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
