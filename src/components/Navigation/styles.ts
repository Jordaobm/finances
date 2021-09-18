import styled from "styled-components/native";

export const ContainerNavigation = styled.View`
  /* background-color: transparent; */
  background-color: white;
  flex-direction: row;
  height: 60px;
  padding: 0 53px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

interface HomeProps {
  color: string;
}

export const Home = styled.View<HomeProps>`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props?.color};
  border-radius: 15px;
`;

export const NavigationButton = styled.TouchableOpacity``;
