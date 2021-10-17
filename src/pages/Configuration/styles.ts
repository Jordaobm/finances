import styled from "styled-components/native";

export const Heading = styled.Text`
  font-family: "Roboto-Medium";
`;

export const Background = styled.View`
  background-color: rgba(1, 55, 148, 0.8);
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
  flex: 1;
`;

export const TitlePage = styled.Text`
  color: #343434;
  font-family: "Roboto-Bold";
  font-size: 22px;
  text-align: center;
`;

export const SubtitlePage = styled.Text`
  color: #c6c6c6;
  font-family: "Roboto-Regular";
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
`;

export const ContainerImage = styled.View`
  margin-top: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CategoriesImage = styled.Image`
  width: 100%;
  height: 258px;
`;

export const GoBack = styled.TouchableOpacity`
  padding: 32px 0;
`;

export const FormContainer = styled.View`
  margin-top: 16px;
`;

export const ContainerInput = styled.View`
  margin-top: 16px;
`;

export const Actions = styled.View`
  width: 100%;
  height: 62px;
  flex-direction: row;
  background-color: white;
  border-width: 0.5px;
  border-style: solid;
  border-color: #ededed;
`;
export const Action = styled.TouchableOpacity`
  width: 50%;
  border-width: 0.5px;
  border-style: solid;
  border-color: #ededed;

  justify-content: center;
  align-items: center;
`;
export const CancelText = styled.Text`
  color: #595959;
  font-family: "Roboto-Regular";
  font-size: 16px;
  text-align: center;
`;
export const AcceptText = styled.Text`
  color: #3cc75e;
  font-family: "Roboto-Regular";
  font-size: 16px;
  text-align: center;
`;

export const DeleteButton = styled.TouchableOpacity`
  margin-top: 48px;
  width: 100%;

  border-width: 1px;
  border-style: dashed;
  border-color: #ff6f6f;
  border-radius: 10px;

  justify-content: space-between;
  align-items: center;

  flex-direction: row;
  padding: 16px;
`;

export const DeleteText = styled.Text`
  color: #ff6f6f;
  font-family: "Roboto-Regular";
  font-size: 16px;
  text-align: center;
`;

export const Version = styled.Text`
  margin-top: 10px;
  font-family: "Roboto-Regular";
  font-size: 10px;
  color: #c6c6c6;
`;

export const ContainerAction = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0;
`;
export const ExportData = styled.TouchableOpacity``;
export const ExportDataText = styled.Text`
  color: #ff6f6f;
  font-family: "Roboto-Regular";
  font-size: 12px;
  text-align: center;
`;
export const ImportDataText = styled.Text`
  color: #3cc75e;
  font-family: "Roboto-Regular";
  font-size: 12px;
  text-align: center;
`;
export const ImportData = styled.TouchableOpacity``;

export const FileDB = styled.TouchableOpacity`
  padding: 16px;
`;

export const FileDBText = styled.Text`
  font-size: 16px;
  font-family: "Roboto-Regular";
  color: #595959;
  width: 100%;
`;
export const FileDBData = styled.Text`
  font-size: 12px;
  font-family: "Roboto-Regular";
  color: #c1c1c1;
`;

export const FileDBPath = styled.Text`
  font-size: 7px;
  font-family: "Roboto-Regular";
  color: #c8c8c8;
  width: 100%;
`;

export const ContainerFilesDB = styled.View`
  border-width: 1px;
  border-style: dashed;
  border-color: #c6c6c6;
  border-radius: 10px;

  width: 100%;
  background-color: white;
  margin: 16px 0;
  border-radius: 10px;
  padding: 8px;
`;

export const Icone = styled.View`
  position: absolute;
  top: 14px;
  right: 10px;
`;
