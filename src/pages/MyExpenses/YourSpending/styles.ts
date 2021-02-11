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

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 15px;
  margin-top: 4%;
`;

export const History = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  margin-top: 30px;
`;

export const HistoryText = styled.Text`
  font-family: CircularStd-Medium;
  font-size: 17px;
  line-height: 19px;
  color: #172635;
`;

export const HistoryInput = styled(TextInputMask)`
  width: 70px;
  font-family: CircularStd-Medium;
  font-size: 17px;
  line-height: 19px;
  color: #6d8399;
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
  color: #172635;
`;

export const ContentCategory = styled.View`
  padding: 0 10px;
`;

export const ContainerCategory = styled.View``;

export const Category = styled.View`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 10px 20px #0000;
  padding: 15px 0;
`;

interface CategoriesProps {
  padding?: boolean;
}

export const Categories = styled.View<CategoriesProps>`
  margin: 10px 0;
`;

export const CategoryTitle = styled(TouchableOpacity)`
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

export const ExpenseContainer = styled(TouchableOpacity)`
  width: 100%;
  margin: 5px 0;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
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

export const ButtonAlterSalary = styled(TouchableOpacity)``;

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

export const ButtonAddCategory = styled.View`
  margin-top: 20px;
  width: 100%;
`;

export const AddCategoryButtonWraper = styled.View`
  width: 100%;
  margin: 15px 0;
  justify-content: center;
  align-items: center;
`;

export const AddCategory = styled.View`
  width: 300px;
`;

export const Next = styled.View`
  margin-bottom: 30px;
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
