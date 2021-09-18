import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { Operations } from "../../components/Operations";
import { OperationsCards } from "../../components/OperationsCards";
import { OutputChart } from "../../components/OutputChart";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  Background,
  ContainerGraph,
  ContainerOperationCards,
  CurrentValue,
  CurrentValueContainer,
  SmallText,
} from "./styles";

export const Home = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(1, 55, 148, 0.0)"
        translucent
      />
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
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
        <Operations />
      </ScrollView>
      <Navigation activeRoute="Home" />
    </>
  );
};
