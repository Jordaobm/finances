import Autocomplete from "react-native-autocomplete-input";
import styled from "styled-components/native";

interface CustomAutocompleteStyleProps {
  color: boolean;
}

export const Container = styled.View`
  position: relative;
  flex-direction: row;

  padding-left: 14px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #f5f5f5;
  border-radius: 10px;
  padding-right: 14px;
`;

export const CustomAutocompleteStyle = styled(Autocomplete)`
  border-color: white;
`;

export const ContainerItem = styled.TouchableOpacity`
  width: 100%;
  padding: 14px;
  background-color: white;
  color: #595959;
  position: relative;
`;
