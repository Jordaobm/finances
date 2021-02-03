import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const TextHeader = styled.Text`
  margin-left: 7%;
  font-family: CircularStd-Black;
  font-style: normal;
  font-size: 16px;
  color: #172635;
`;

export const ContentButton = styled(RectButton)`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  background-color: #d8f7e4;
  justify-content: center;
  align-items: center;
`;
export const IconButton = styled(Icon)`
  color: #4ccc81;
`;
