import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

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

export const SkipStepButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 25px;
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

interface CategoriesProps {
  padding?: boolean;
}

interface IconCategoryWraperProps {
  color?: string;
  disable?: boolean;
}

export const BalanceAvailable = styled.Text`
  margin: 27px 0;
  font-family: CircularStd-Medium;
  font-size: 32px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const ActionsContent = styled.View`
  width: 100%;
`;
export const ActionsText = styled.Text`
  font-family: CircularStd-Medium;
  font-size: 17px;
  line-height: 19px;
  color: ${(props) => props.theme.textColor};
`;
export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
  font-family: CircularStd-Medium;
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

export const Salary = styled(TextInputMask)`
  width: 100%;
  padding: 20px;
  font-family: CircularStd-Medium;

  font-size: 32px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const Value = styled.Text`
  justify-content: center;
  align-items: center;
  font-family: CircularStd-Bold;
  font-size: 14px;
  line-height: 16px;
  color: #e6492d;
`;

interface ExpenseIconWraperProps {
  color: string;
}

export const ButtonAlterSalary = styled(TouchableOpacity)``;

export const Negative = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  /* background-color: yellow; */
  width: 100%;
`;
export const NegativeIcon = styled.Text`
  font-size: 32px;
  color: #eb5757;
`;

export const SalaryNegative = styled(TextInputMask)`
  padding: 20px;
  font-family: CircularStd-Medium;

  font-size: 32px;
  text-align: center;
  color: #eb5757;
`;
