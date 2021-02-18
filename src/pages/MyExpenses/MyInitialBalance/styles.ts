import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
  background-color: ${(props) => props.theme.background};
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 15px;
  margin-top: 4%;
`;

export const ImageWraper = styled(LinearGradient)`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
`;

export const IconFlag = styled.Image`
  width: 40px;
  height: 40px;
`;

export const TextTitle = styled.Text`
  margin-top: 30px;
  font-family: CircularStd-Medium;
  font-size: 25px;
  line-height: 25px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const InputValueSalary = styled(TextInputMask)`
  margin-top: 40px;
  width: 100%;
  padding: 20px;
  font-family: CircularStd-Medium;

  font-size: 32px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;
