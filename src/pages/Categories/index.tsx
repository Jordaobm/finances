import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";

export const Categories = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Header color="black" onlySettings />
      </ScrollView>

      <Navigation activeRoute="Categories" />
    </>
  );
};
