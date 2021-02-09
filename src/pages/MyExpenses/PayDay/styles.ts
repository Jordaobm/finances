import LinearGradient from 'react-native-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f6f7fb;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
`;

export const ImageWraper = styled(LinearGradient)`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
`;

export const IconCalendar = styled(Icon)`
  color: white;
`;

export const TextTitle = styled.Text`
  margin-top: 30px;
  font-family: CircularStd-Medium;
  font-size: 25px;
  line-height: 25px;
  text-align: center;
  color: #172635;
`;

export const InputDate = styled(TextInputMask)`
  padding: 20px;
  width: 40%;
  font-family: CircularStd-Medium;
  font-size: 25px;
  text-align: center;
  color: #172635;
`;

export const Body = styled.View``;

export const BodyText = styled.Text`
  font-family: CircularStd-Book;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #172635;
`;

export const Color = styled.Text`
  color: #4ccc81;
  font-family: CircularStd-Bold;
`;
