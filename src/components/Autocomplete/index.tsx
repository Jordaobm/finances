import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ArrowDown } from "../../icons/Icons";
import { AutocompleteOption, CustomAutocompleteProps } from "../../types";
import { Container, ContainerItem, CustomAutocompleteStyle } from "./styles";

export const CustomAutocomplete = ({
  data,
  placeholder,
}: CustomAutocompleteProps) => {
  const [inputText, setInputText] = useState("");
  const [active, setActive] = useState(false);

  const [selectedOption, setSelectedOption] = useState<AutocompleteOption>(
    {} as AutocompleteOption
  );

  const filterData = (data: AutocompleteOption[], text: string) => {
    return data.filter((item) => item?.label?.startsWith(text));
  };
  return (
    <Container>
      <CustomAutocompleteStyle
        placeholder={placeholder}
        inputContainerStyle={{
          borderColor: "rgba(0,0,0,0)",
        }}
        containerStyle={{
          position: "relative",
          width: "100%",
          borderColor: "rgba(0,0,0,0)",
        }}
        listContainerStyle={{
          position: "absolute",
          top: 40,
          left: -5,
          width: "100%",
          borderColor: "rgba(0,0,0,0)",
        }}
        style={{ color: "#595959" }}
        placeholderTextColor="#c6c6c6"
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        data={
          !active
            ? []
            : selectedOption?.label
            ? []
            : filterData(data, inputText)
        }
        value={inputText}
        onChangeText={(text) => {
          setInputText(text);
          setSelectedOption({} as AutocompleteOption);
        }}
        flatListProps={{
          keyboardShouldPersistTaps: "always",
          keyExtractor: (item, idx) => `${idx}`,
          renderItem: ({ item }) => (
            <ContainerItem
              onPress={() => {
                setSelectedOption(item);
                setInputText(item?.label);
              }}
            >
              <Text>{item?.label}</Text>
            </ContainerItem>
          ),
        }}
      />

      <View style={{ paddingTop: 10 }}>
        <ArrowDown color="#C6C6C6" />
      </View>
    </Container>
  );
};
