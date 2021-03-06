import { TextInputMask } from 'react-native-masked-text';
import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.theme.background};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
`;

export const ContentIcon = styled.View``;

interface IconBackgroundProps {
  color: string;
}

export const IconBackground = styled.View<IconBackgroundProps>`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
`;

export const NameTitle = styled.Text`
  width: 100%;
  max-width: 300px;
  text-align: center;
  font-family: CircularStd-Book;
  font-size: 18px;
  line-height: 18px;
  color: ${(props) => props.theme.textColor};
`;

export const IconCategory = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ContainerInput = styled.View`
  text-align: center;
  width: 35%;
  margin: 20px 0;
  background: ${(props) => props.theme.backgroundCard};
  border: 2px solid ${(props) => props.theme.borderInputColor};
  border-radius: 10px;
  padding: 0px 10px;
`;

export const InputDate = styled(TextInputMask)`
  text-align: center;

  width: 100%;
  font-family: CircularStd-Medium;

  color: ${(props) => props.theme.textColor};
`;

export const Description = styled.Text`
  width: 100%;
  max-width: 300px;
  text-align: center;
  font-family: CircularStd-Book;
  font-size: 15px;
  line-height: 15px;
  color: ${(props) => props.theme.textColor};
`;

export const Finances = styled.Text`
  color: #4ccc81;
  font-family: CircularStd-Bold;
`;
