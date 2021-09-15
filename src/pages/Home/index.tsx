import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { OperationsCards } from "../../components/OperationsCards";
import { OutputChart } from "../../components/OutputChart";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  Background,
  ContainerGraph,
  ContainerOperationCards,
  CurrentValue,
  CurrentValueContainer,
  Heading,
  SmallText,
} from "./styles";

export const Home = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(1, 55, 148, 0.8)"
      />
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Background>
            <Header color="white" />
            <ContainerOperationCards>
              <OperationsCards />
            </ContainerOperationCards>
            <CurrentValueContainer>
              <SmallText>Valor atual</SmallText>
              <CurrentValue>{formatCurrency(800)}</CurrentValue>
              <ContainerGraph>
                <OutputChart />
              </ContainerGraph>
            </CurrentValueContainer>
          </Background>
        </View>
      </ScrollView>
      <Navigation />
    </>
  );
};
