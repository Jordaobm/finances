import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { Operations } from "../../components/Operations";
import { OperationsCards } from "../../components/OperationsCards";
import { OutputChart } from "../../components/OutputChart";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
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
  const { wallet, operations } = useUpdateDataContext();

  let currentValue = 0;

  operations?.forEach((operation) => {
    if (operation?.type === "INPUT") {
      currentValue = currentValue + Number(operation?.value);
    }

    if (operation?.type === "OUTPUT") {
      currentValue = currentValue - Number(operation?.value);
    }
  });

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
            <CurrentValue>{formatCurrency(Number(currentValue))}</CurrentValue>

            <ContainerGraph>
              {operations?.filter((e) => e?.type === "OUTPUT")?.length > 0 && (
                <OutputChart />
              )}
            </ContainerGraph>
          </CurrentValueContainer>
        </Background>
        <Operations />
      </ScrollView>
      <Navigation activeRoute="Home" />
    </>
  );
};
