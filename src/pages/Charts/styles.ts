import styled from "styled-components/native";

export const Heading = styled.Text`
  font-family: "Roboto-Medium";
`;

export const Background = styled.View`
  background-color: rgba(1, 55, 148, 0.8);
  /* height: 80%; */
`;

export const ContainerOperationCards = styled.View`
  margin-top: 32px;
  padding: 0 32px;
`;

export const CurrentValueContainer = styled.View`
  padding: 42px 32px;
`;
export const SmallText = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  color: white;
`;
export const CurrentValue = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 32px;
  color: white;
`;

export const ContainerGraph = styled.View`
  margin: 32px 0;
  margin-bottom: 56px;
`;

export const Container = styled.View`
  padding: 0 32px;
  margin-top: 12px;
`;

export const ContainerOperation = styled.View`
  margin-top: 100px;
`;

export const TitlePage = styled.Text`
  color: #343434;
  font-family: "Roboto-Bold";
  font-size: 22px;
`;

export const SubtitlePage = styled.Text`
  color: #c6c6c6;
  font-family: "Roboto-Regular";
  font-size: 14px;
  margin-top: 8px;
`;

export const ContainerImage = styled.View`
  margin-top: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const OperationImage = styled.Image`
  width: 100%;
  height: 230.68px;
`;

export const ContainerInput = styled.View`
  margin-top: 16px;
`;

export const Filter = styled.View`
  margin-top: 24px;
`;

export const FilterText = styled.Text`
  font-size: 16px;
  color: #595959;
  font-family: "Roboto-Medium";
`;

export const FilterButton = styled.TouchableOpacity`
  width: 100%;
  background-color: rgba(1, 55, 148, 0.8);
  padding: 16px;
  margin-top: 16px;
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const FilterButtonText = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 16px;
  color: white;
`;

export const LoadingContainer = styled.View`
  align-items: center;
  width: 100%;
  height: 200px;
`;

export const ChartsContainer = styled.View`
  width: 100%;
  min-height: 50px;
  background-color: #fbfbfb;

  margin-bottom: 70px;
  padding: 32px;
`;
