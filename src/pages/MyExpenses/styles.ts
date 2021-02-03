import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import {Link} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import {css} from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background-color: #f6f7fb;
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 10%;
  padding: 15px;
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
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #172635;
`;

export const InputValueSalary = styled(TextInputMask)`
  margin-top: 40px;
  width: 100%;
  padding: 20px;
  font-family: CircularStd-Medium;

  font-size: 32px;
  text-align: center;
  color: #172635;
`;

export const SkipStepButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: red;
  position: relative;
  top: 5%;
`;

export const SkipStep = styled(RectButton)`
  text-align: center;
  height: 30px;
  justify-content: center;
  align-items: center;
  width: 120px;
`;

export const SkipStepText = styled.Text`
  font-family: CircularStd-Book;
  font-size: 14px;
  text-align: center;
  color: #5d87a8;
`;

export const ArrowDown = styled.Image`
  width: 43px;
  height: 9px;
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

export const Categories = styled.View`
  padding: 10px;
`;

export const Category = styled.View`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 10px 20px #0000;
  margin: 8px 0px;
  padding: 15px 0;
`;

export const ButtonAddCategory = styled.View`
  margin-top: 20px;
  width: 100%;
`;

export const CategoryTitle = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  align-items: center;
`;

interface IconCategoryWraperProps {
  color?: string;
  disable?: boolean;
}

export const IconCategoryWraper = styled.View<IconCategoryWraperProps>`
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
  ${(props) =>
    props.disable &&
    css`
      background-color: #dddee2;
    `}
`;
export const IconCategory = styled.Image`
  width: 40px;
  height: 40px;
`;
export const CategoryName = styled.Text`
  font-family: CircularStd-Medium;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: flex-end;
  color: #5d87a8;
`;
export const IconArrow = styled(Icon)`
  color: #5d87a8;
`;

export const IconWraper = styled.View`
  width: 30%;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
`;
export const IconArrowWraper = styled.View`
  width: 20%;
  justify-content: center;
  align-items: center;
`;
