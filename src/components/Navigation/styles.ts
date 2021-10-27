import styled from "styled-components/native";

interface HomeProps {
  color: string;
}

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
