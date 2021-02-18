import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
`;

export const TextHeader = styled.Text`
  font-family: CircularStd-Black;
  font-style: normal;
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
`;

export const ContentButton = styled(RectButton)`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.backgroundButton};
  justify-content: center;
  align-items: center;
`;
export const IconButton = styled(Icon)`
  color: ${(props) => props.theme.backgroundText};
`;
