import styled from "styled-components/native";

export const ContentCard = styled.View`
  flex-direction: column;
`;

export const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerCard = styled.TouchableOpacity`
  padding: 16px;
`;

export const TextOperation = styled.Text`
  font-size: 12px;
  font-family: "Roboto-Medium";
  color: #7e7e7e;
`;

export const TitleCategory = styled.Text`
  font-size: 18px;
  font-family: "Roboto-Medium";
  color: #595959;
`;

export const IsTransfer = styled.Text`
  font-size: 10px;
  font-family: "Roboto-Regular";
  color: #c6c6c6;
`;
export const ContainerText = styled.View`
  width: 100%;
`;

export const ContainerTitle = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const ValueAndMonth = styled.View``;

interface BulletProps {
  color: string;
}

export const Value = styled.Text<BulletProps>`
  color: ${(props) => props?.color};
  font-family: "Roboto-Medium";
  font-size: 18px;
  position: relative;
  left: -4px;
`;

export const DateText = styled.Text`
  font-size: 12px;
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
`;
