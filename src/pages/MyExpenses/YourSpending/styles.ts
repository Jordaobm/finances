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

interface CategoriesProps {
  padding?: boolean;
}

interface IconCategoryWraperProps {
  color?: string;
  disable?: boolean;
}

interface ExpenseIconWraperProps {
  color: string;
}

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
