import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { css } from 'styled-components';
import styled from 'styled-components/native';

interface ContainerProps {
  inputFocus: boolean;
  inputErr: boolean;
}

export const Container = styled.View<ContainerProps>`
  margin: 6px 0;
  background: ${(props) => props.theme.backgroundCard};
  border: 2px solid ${(props) => props.theme.borderInputColor};
  border-radius: 10px;
  padding: 0px 10px;

  ${(props) =>
    props.inputFocus &&
    css`
      border: 2px solid #4ad07e;
    `}

  ${(props) =>
    props.inputErr &&
    css`
      border: 2px solid #ff96b1;
    `}
`;

export const InputStyle = styled(TextInput)`
  font-family: CircularStd-Medium;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: ${(props) => props.theme.textColor};
`;

export const InputValueSalary = styled(TextInputMask)`
  width: 100%;
  font-family: CircularStd-Medium;

  color: ${(props) => props.theme.textColor};
`;
