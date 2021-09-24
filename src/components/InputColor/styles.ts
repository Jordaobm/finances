import styled from "styled-components/native";
import Draggable from "react-native-draggable";

export const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
`;
export const Placeholder = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 16px;
  color: #595959;
`;

interface BoxColorProps {
  color: string;
}

export const BoxColor = styled.View<BoxColorProps>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};

  border-width: 1px;
  border-style: dashed;
  border-color: #c6c6c6;
  border-radius: 10px;
`;
export const BoxInputColor = styled.View`
  flex: 1;
  padding: 16px;
`;
export const Line = styled.View`
  width: 100%;
  height: 2px;
  background-color: #7e7e7e;
`;
export const Circle = styled(Draggable)``;
