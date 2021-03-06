import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.theme.backgroundInit};
  flex: 1;
`;

export const Content = styled.View`
  width: 100%;
  height: 80%;
  padding: 100px 30px;
`;

export const ImageWraper = styled.View`
  width: 85px;
  height: 120px;
`;
export const ImageIcon = styled.Image`
  width: 100%;
  height: 100%;
`;
export const AppName = styled.View`
  width: 100%;
  justify-content: center;
`;
export const AppNameText = styled.Text`
  font-family: CircularStd-Black;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  color: #ffffff;
`;

export const AppDescription = styled.View``;
export const AppDescriptionText = styled.Text`
  font-family: CircularStd-Black;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #2b9d57;
`;
export const ButtonWraper = styled.View`
  width: 100%;
  padding: 0 20px;
`;
