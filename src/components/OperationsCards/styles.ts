import styled from "styled-components/native";

export const Container = styled.View``;

export const MonthContainer = styled.View`
  flex-direction: row;
`;

export const MonthText = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 22px;
  color: white;
`;
export const Month = styled.Text`
  text-transform: capitalize;
  font-family: "Roboto-Bold";
  font-size: 22px;
  color: white;
`;
export const IntervalDates = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 10px;
  color: white;
`;

export const ContainerCards = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-between;
`;

export const EntryCard = styled.View`
  width: 47%;
  border-width: 1px;
  border-style: dashed;
  border-color: white;
  border-radius: 10px;
  padding: 16px;
`;
export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  font-family: "Roboto-Bold";
  font-size: 18px;
`;
export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

interface Value {
  color: string;
}

export const Value = styled.Text<Value>`
  margin-top: 16px;
  font-family: "Roboto-Bold";
  font-size: 16px;
  color: ${(props) => props?.color};
`;
