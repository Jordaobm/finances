import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
export const Container = styled.View`
  background-color: #fff;
  margin-top: 15px;
  border-radius: 15px;
  padding: 10px;
`;

export const SelectedDateInformations = styled.View``;

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

export const ExpenseValue = styled.View`
  justify-content: center;
  align-items: center;
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

export const ButtonIncome = styled(TouchableOpacity)``;

export const IncomeIconContainer = styled.View``;
export const IncomeIconWraper = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: #e0f8e9;
`;

export const IncomeName = styled.Text`
  font-family: CircularStd-Medium;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #5d87a8;
  text-align: center;
`;

export const IncomeValue = styled.View`
  justify-content: center;
  align-items: center;
`;

export const IncomeValueInput = styled(TextInputMask)`
  width: 100%;
  padding: 20px;

  justify-content: center;
  align-items: center;
  font-family: CircularStd-Bold;
  font-size: 14px;
  line-height: 16px;
  color: #67e799;
`;

export const IncomeContainer = styled.View`
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
`;
