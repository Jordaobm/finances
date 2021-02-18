import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  background-color: ${(props) => props.theme.background};
  flex: 1;
`;

export const ContentCategory = styled.View`
  margin-top: 40px;
  padding: 0 10px;
`;
export const Value = styled.Text`
  justify-content: center;
  align-items: center;
  font-family: CircularStd-Bold;
  font-size: 14px;
  line-height: 16px;
  color: #e6492d;
`;

export const ActionsEdit = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
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
