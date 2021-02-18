import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

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

export const InputContainer = styled.View`
  flex: 1;
  padding: 12px;
`;

export const ValueAndDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputValue = styled.View`
  width: 48%;
`;
export const InputDate = styled.View`
  width: 48%;
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
  color: #fff;
  font-family: CircularStd-Medium;
`;
