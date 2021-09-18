import styled from "styled-components/native";

export const ContentCard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerCard = styled.View`
  padding: 16px;
`;

export const TextOperation = styled.Text`
  font-size: 16px;
  font-family: "Roboto-Medium";
  color: #7e7e7e;
  padding-right: 10px;
  max-width: 55%;
`;

export const ValueAndMonth = styled.View`
  align-items: flex-end;
  margin-left: auto;
  padding-left: 10px;
`;

interface BulletProps {
  color: string;
}

export const Value = styled.Text<BulletProps>`
  color: ${(props) => props?.color};
  font-family: "Roboto-Medium";
  font-size: 18px;
`;

export const DateText = styled.Text`
  font-size: 10px;
  font-family: "Roboto-Regular";
  color: #c6c6c6;
`;

export const Bullet = styled.View<BulletProps>`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props?.color};
  border-radius: 10px;
  margin-right: 16px;
`;

export const Line = styled.View`
  width: 100%;
  height: 2px;
  margin-top: 8px;

  background-color: #f5f5f5;
  /* background-color: red; */
`;
