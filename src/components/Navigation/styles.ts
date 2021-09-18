import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

interface HomeProps {
  color: string;
}

export const Content = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 64px;
  height: 58px;
  align-items: flex-end;
  padding-bottom: 23px;
`;

export const Home = styled.View<HomeProps>`
  width: 50px;
  height: 50px;
  position: relative;
  bottom: -11px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props?.color};
  border-radius: 15px;
`;

export const NavigationButton = styled.TouchableOpacity``;
