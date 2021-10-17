import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.View`
  margin-top: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const DataImage = styled.Image`
  width: 100%;
  height: 258px;
`;

export const ContainerRefreshIcon = styled.View``;

export const TitleTask = styled.Text`
  color: #fff;
  font-family: "Roboto-Bold";
  font-size: 20px;
  margin-top: 32px;
`;

export const TextDescription = styled.Text`
  color: #fff;
  font-family: "Roboto-Regular";
  font-size: 12px;
  text-align: center;
`;

export const Progress = styled.Text`
  margin-top: 16px;

  color: #fff;
  font-family: "Roboto-Regular";
  font-size: 12px;
  text-align: center;
`;

export const CloseAndReturn = styled.TouchableOpacity`
  margin-top: 32px;

  border-width: 1px;
  border-style: solid;
  border-color: #fff;
  border-radius: 10px;
  padding: 8px 16px;
`;

export const CloseAndReturnText = styled.Text`
  color: #fff;
  font-family: "Roboto-Regular";
  font-size: 12px;
  text-align: center;
`;
