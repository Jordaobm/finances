import React from "react";
import { StatusBar, Text, View } from "react-native";

export const Categories = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={{ backgroundColor: "red", flex: 1 }}>
        <Text>Categories</Text>
      </View>
    </>
  );
};
