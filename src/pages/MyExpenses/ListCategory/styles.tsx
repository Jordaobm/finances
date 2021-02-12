import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import {
  RectButton,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { css } from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background-color: #f6f7fb;
  flex: 1;
`;
export const HeaderImage = styled.View`
  justify-content: center;
  align-items: center;
  padding: 15px;
`;
export const ContentxpenseCategory = styled.View`
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;
export const ArrowDown = styled.Image`
  width: 43px;
  height: 9px;
`;

export const TitleExpenseCategory = styled.Text`
  font-family: CircularStd-Bold;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #172635;
`;

export const Goals = styled.View`
  margin-top: 13px;
  width: 100%;
`;

export const Goal = styled(RectButton)`
  margin: 8px 0px;
  width: 100%;
  background-color: #fff;
  box-shadow: 10px 10px 20px #0000;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

interface GoalIconWraperProps {
  color?: string;
}
export const GoalIconWraper = styled.View<GoalIconWraperProps>`
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
export const GoalText = styled.Text`
  color: #5d87a8;
  font-family: CircularStd-Medium;
  margin-left: 14px;
  font-size: 14px;
`;

export const Graphic = styled.Image`
  width: 40px;
  height: 40px;
`;
