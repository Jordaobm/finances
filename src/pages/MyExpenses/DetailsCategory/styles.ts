import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { css } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  background-color: #f6f7fb;
  flex: 1;
`;

export const ContentCategory = styled.View`
  margin-top: 40px;
  padding: 0 10px;
`;

export const Category = styled.View`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 10px 20px #0000;
  padding: 15px 0;
`;

export const ButtonAddCategory = styled.View`
  margin-top: 20px;
  width: 100%;
`;

export const CategoryTitle = styled.View`
  width: 100%;
  margin: 10px 0;
  flex-direction: row;
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
  align-items: center;
  color: #5d87a8;
  text-align: center;
`;
export const IconArrow = styled(Icon)`
  color: #5d87a8;
`;

export const IconWraper = styled.View`
  justify-content: center;
  align-items: center;
  width: 30%;
`;
export const Name = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 50%;
  padding: 0 10px;
`;
export const IconArrowWraper = styled.View`
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const ExpenseContainer = styled(TouchableOpacity)`
  width: 100%;
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
`;

interface ExpenseIconWraperProps {
  color: string;
}

export const ExpenseIconContainer = styled.View``;

export const ExpenseIconWraper = styled.View<ExpenseIconWraperProps>`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;

  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
`;

export const ExpenseIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

export const ExpenseName = styled.Text`
  font-family: CircularStd-Medium;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #5d87a8;
  text-align: center;
`;

export const Value = styled.Text`
  justify-content: center;
  align-items: center;
  font-family: CircularStd-Bold;
  font-size: 14px;
  line-height: 16px;
  color: #e6492d;
`;

export const ExpenseValueInput = styled(TextInputMask)`
  width: 100%;
  padding: 20px;

  justify-content: center;
  align-items: center;
  font-family: CircularStd-Bold;
  font-size: 14px;
  line-height: 16px;
  color: #e6492d;
`;

export const ExpenseValue = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ActionsEdit = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 10px;
`;

export const Gradient = styled(LinearGradient)`
  width: 45%;
  height: 40px;
  border-radius: 10px;
`;

export const ButtonContent = styled(RectButton)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
  font-family: CircularStd-Medium;
`;
