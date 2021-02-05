import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {css} from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  padding: 0 10px;
`;

interface ButtonContentProps {
  colors: {
    initial: string;
    finished: string;
  };
}

export const Content = styled<ButtonContentProps>(RectButton)`
  border-radius: 10px;
  width: 100%;
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;

  ${(props) =>
    props.colors &&
    css`
      background-color: transparent;
    `}
`;

export const TextButton = styled.Text`
  font-family: CircularStd-Black;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: flex-end;
  color: #4ccc81;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export const IconButton = styled(Icon)`
  color: #4ccc81;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export const GradienteColor = styled(LinearGradient)`
  border-radius: 10px;
  width: 100%;
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
