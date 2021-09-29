import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

interface ContainerInputProps {
  color: string;
}

export const ContainerInput = styled.View<ContainerInputProps>`
  padding: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props?.color};
  border-radius: 10px;
`;

export const CustomInput = styled.TextInput`
  margin: 0;
  padding: 0;
  color: #595959;
`;

export const InputStyle = styled(TextInputMask)`
  margin: 0;
  padding: 0;
  color: #595959;
`;
