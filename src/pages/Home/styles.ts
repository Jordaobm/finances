import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { css } from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${(props) => props.theme.background};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 79px;
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
  color: ${(props) => props.theme.textColor};
`;
export const Goals = styled.View`
  margin-top: 13px;
  width: 100%;
`;

interface GoalProps {
  disable?: boolean;
}

export const Goal = styled<GoalProps>(RectButton)`
  margin: 8px 0px;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundCard};
  box-shadow: 10px 10px 20px #0000;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 15px;

  ${(props) =>
    props.disable &&
    css`
      background-color: ${(props) => props.theme.backgroundCardDisable};
    `}
`;

interface GoalIconWraperProps {
  color?: string;
  disable?: boolean;
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
  ${(props) =>
    props.disable &&
    css`
      background-color: ${(props) => props.theme.backgroundCardDisable};
    `}
`;
export const GoalText = styled.Text`
  color: ${(props) => props.theme.textBlue};
  font-family: CircularStd-Medium;
  margin-left: 14px;
  font-size: 14px;
`;

export const Graphic = styled.Image`
  width: 40px;
  height: 40px;
`;
