import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

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

interface ImageWraperProps {
  color: string;
}

export const ImageWraper = styled.View<ImageWraperProps>`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 35px;

  background-color: ${(props) => props.color};
`;

export const IconShedullingAccount = styled.Image`
  width: 40px;
  height: 40px;
`;

export const SchedulingInformation = styled.View`
  margin-top: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const IncomeSchedules = styled.View`
  justify-content: center;
  align-items: center;
`;

export const IncomeText = styled.Text`
  max-width: 150px;
  text-align: center;
  font-family: CircularStd-Medium;
  font-size: 22px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;
export const IncomeSchedulesQuantity = styled.Text`
  max-width: 150px;
  font-family: CircularStd-Book;
  font-size: 40px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const ExpenseSchedules = styled.View`
  justify-content: center;
  align-items: center;
`;
export const ExpenseText = styled.Text`
  max-width: 150px;
  text-align: center;
  font-family: CircularStd-Medium;
  font-size: 22px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;
export const ExpenseSchedulesQuantity = styled.Text`
  max-width: 150px;
  font-family: CircularStd-Book;
  font-size: 40px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const ActionsContent = styled.View`
  width: 100%;
  margin-top: 40px;
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
