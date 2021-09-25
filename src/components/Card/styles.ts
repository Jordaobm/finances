import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  max-width: 299px;
  height: 172px;

  align-items: center;
  justify-content: center;
`;

export const CardContent = styled.TouchableOpacity`
  width: 100%;
  max-width: 299px;
  height: 172px;
  border-width: 1px;
  border-style: dashed;
  border-color: #c6c6c6;
  border-radius: 10px;
  padding: 20px;

  opacity: 0.4;
`;

export const TouchAddCard = styled.TouchableOpacity`
  position: absolute;
  font-family: "Roboto-Bold";
  font-size: 18px;
  color: #343434;
  opacity: 1;
`;

export const ButtonText = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 18px;
  color: #343434;
  opacity: 1;
`;

export const Bullets = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const Bullet = styled.View`
  width: 5px;
`;

export const ChipImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-top: 40px;
`;

export const Value = styled.Text`
  color: #595959;
  font-size: 28px;
  font-family: "Roboto-Bold";
`;
export const Name = styled.Text`
  color: #595959;
  font-size: 14px;
  font-family: "Roboto-Bold";

  max-width: 190px;
`;
export const DataCard = styled.View`
  position: relative;
  top: -20%;
  left: 25%;
  display: flex;
  flex-direction: column;
`;
export const InstitutionName = styled.Text`
  position: absolute;
  top: 110%;
  left: 10%;
  color: #595959;
  font-size: 10px;
  font-family: "Roboto-Regular";
`;
