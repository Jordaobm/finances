import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { css } from 'styled-components';
import styled from 'styled-components/native';

interface ContainerProps {
  inputFocus: boolean;
}

export const Container = styled.View<ContainerProps>`
  margin: 6px 0;
  background: #ffffff;
  border: 2px solid #d4dfef;
  border-radius: 10px;
  padding: 0px 10px;

  ${(props) =>
    props.inputFocus &&
    css`
      border: 2px solid #4ad07e;
    `}
`;

export const InputStyle = styled(TextInput)`
  font-family: CircularStd-Medium;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #5d87a8;
`;

export const InputValueSalary = styled(TextInputMask)`
  width: 100%;
  font-family: CircularStd-Medium;

  color: #172635;
`;
