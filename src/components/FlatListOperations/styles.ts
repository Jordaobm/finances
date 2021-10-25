import styled from "styled-components/native";

interface FlatListContainerProps {
  smallPadding?: boolean;
}

export const FlatListContainer = styled.SafeAreaView<FlatListContainerProps>`
  position: relative;
  top: -72px;
  width: 100%;
  padding: ${(props) => (props?.smallPadding ? "0 0px" : "0 32px")};
`;

export const OperationsText = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 16px;
  color: white;
`;

export const Container = styled.View`
  padding: 0 32px;
  position: relative;
  top: -72px;
  width: 100%;
`;

export const Content = styled.View``;

export const ContentText = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const AddOperations = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const AddOperationsText = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  color: white;
`;

interface ContainerCardOperationsProps {
  border?: boolean;
  renderItem: any;
}

export const ContainerCardOperations = styled.FlatList<ContainerCardOperationsProps>`
  width: 100%;
  background-color: white;
  margin-top: 8px;
  border-radius: 10px;

  border-width: ${(props) => (props?.border ? "1px" : 0)};
  border-style: dashed;
  border-color: #c6c6c6;
  border-radius: 10px;
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

export const ContainerNotOperation = styled.View`
  padding: 16px;
  margin-top: 8px;
  background-color: white;
  border-radius: 10px;
`;