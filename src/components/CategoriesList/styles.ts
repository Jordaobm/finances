import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
  width: 100%;
  margin-top: 32px;
`;

export const Content = styled.View``;

export const ContentText = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const AddOperations = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const OperationsText = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 16px;
  color: #595959;
`;

export const AddOperationsText = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  color: #595959;
`;

export const ContainerCardOperations = styled.View`
  width: 100%;
  background-color: white;
  margin-top: 8px;
  padding: 8px;
  border-width: 1px;
  border-style: dashed;
  border-color: #c6c6c6;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const ContainerNotOperation = styled.View`
  padding: 10px;
`;

export const NotOperation = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 16px;
  color: #7e7e7e;
`;

export const NotOperationSpan = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 12px;
  color: #c6c6c6;
`;
