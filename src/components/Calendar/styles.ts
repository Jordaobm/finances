import styled from 'styled-components/native';
export const Container = styled.View`
  background-color: #fff;
  margin: 15px 0;
  border-radius: 15px;
  padding: 10px;
`;

export const SelectedDateInformations = styled.View``;

interface ExpenseIconWraperProps {
  color: string;
}

export const Value = styled.Text`
  justify-content: center;
  align-items: center;
  font-family: CircularStd-Bold;
  font-size: 14px;
  line-height: 16px;
  color: #e6492d;
`;
