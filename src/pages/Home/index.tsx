import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { OperationsCards } from "../../components/OperationsCards";
import { Background, ContainerOperationCards, Heading } from "./styles";

export const Home = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(1, 55, 148, 0.8)"
      />
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Background>
          <Header color="white" />

          <ContainerOperationCards>
            <OperationsCards />
          </ContainerOperationCards>
        </Background>
      </View>
    </>
  );
};
