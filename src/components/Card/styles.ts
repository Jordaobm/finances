import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { css } from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
  width: 100%;
  margin: 5px 0;

  background-color: #fff;
  border-radius: 10px;
`;

export const Content = styled(TouchableOpacity)`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface BackgroundIconProps {
  color?: string;
}

export const BackgroundIcon = styled.View<BackgroundIconProps>`
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}

  width:70px;
  height: 70px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
export const IconImg = styled.Image`
  width: 35px;
  height: 35px;
`;
export const Name = styled.Text`
  font-family: CircularStd-Book;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: flex-end;
  color: #5d87a8;
`;
export const ExpenseContainer = styled.View`
  padding: 0px 20px;
`;
export const Value = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Date = styled.Text`
  position: relative;
  top: -10px;
  font-family: CircularStd-Book;
  font-size: 10px;
  color: #5d87a8;
`;
export const IconArrowDown = styled(Icon)`
  color: #5d87a8;
`;

export const Expense = styled(TouchableOpacity)`
  margin: 5px 0;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Income = styled(TouchableOpacity)`
  margin: 5px 0;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface BackgroundIconExpenseProps {
  color?: string;
}

export const BackgroundIconExpense = styled.View<BackgroundIconExpenseProps>`
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}

  width:50px;
  height: 50px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const BackgroundIconIncome = styled.View`
  background-color: #e0f8e9;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const IconImgExpense = styled.Image`
  width: 20px;
  height: 20px;
`;

export const ButtonAddCategory = styled.View`
  margin: 10px 0px;
  width: 100%;
`;

export const ExpenseValueInput = styled(TextInputMask)`
  width: 100%;
  height: 35px;
  color: #e6492d;
`;

export const IncomeValueInput = styled(TextInputMask)`
  width: 100%;
  color: #4ccc81;
`;

export const Placeholder = styled.View`
  margin: 5px 0;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
