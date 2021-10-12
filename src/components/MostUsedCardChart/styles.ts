import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 18px;
  color: #595959;
  font-family: "Roboto-Medium";
  margin-bottom: 18px;
`;

export const ContainerCard = styled.View`
  padding: 16px;
  border-width: 1px;
  border-style: dashed;
  border-color: #c6c6c6;
  border-radius: 10px;

  margin-top: 18px;
  margin-bottom: 50px;
`;
export const SingleCard = styled.View`
  padding: 16px;
  /* flex-direction: row; */
`;

export const ContainerCardName = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface BulletProps {
  color: string;
}

export const Bullet = styled.View<BulletProps>`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props?.color};
  border-radius: 10px;
  margin-right: 16px;
`;

export const ContainerTitle = styled.View`
  max-width: 75%;
`;

export const TitleCard = styled.Text`
  font-size: 18px;
  font-family: "Roboto-Medium";
  color: #595959;
  width: 100%;
`;
export const ValueCard = styled.Text<BulletProps>`
  color: ${(props) => props?.color};
  font-family: "Roboto-Medium";
  font-size: 18px;
  position: relative;
  left: -4px;
`;

export const Icone = styled.View`
  position: absolute;
  top: 2px;
  right: 0;
`;
