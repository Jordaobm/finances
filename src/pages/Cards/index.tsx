import React, { useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { FakeCard } from "../../components/Card";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import {
  CardDescriptionText,
  CardImage,
  CardImageContainer,
  Container,
  ContainerCards,
  ContainerCarousel,
  ContainerColor,
  SubtitlePage,
  TitlePage,
} from "./styles";
import cardImage from "../../assets/card.png";
import { CustomCarousel } from "../../components/Carousel";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { hexToRgb } from "../../utils/colors";
import { Operations } from "../../components/Operations";
import { Card } from "../../types";

export const Cards = () => {
  const { selectedCard, setSelectedCard, cards } = useUpdateDataContext();

  let containerColorStyle;

  if (selectedCard?.id) {
    containerColorStyle = {
      backgroundColor: hexToRgb(selectedCard?.colorBackground, "0.7"),
    };
  } else {
    containerColorStyle = { backgroundColor: "white" };
  }

  return (
    <>
      <StatusBar hidden />
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <ContainerColor style={containerColorStyle}>
          <Header
            color={selectedCard?.id ? "white" : "#595959"}
            onlySettings={!selectedCard?.id}
          />

          <Container>
            <TitlePage
              style={{
                color: selectedCard?.colorText
                  ? selectedCard?.colorText
                  : "#595959",
              }}
            >
              {selectedCard?.name
                ? `Olá, ${selectedCard?.name?.split(" ")[0]}`
                : "Contas e Cartões"}
            </TitlePage>
            <SubtitlePage
              style={{
                marginBottom: selectedCard?.id ? 8 : 0,
                color: selectedCard?.colorText
                  ? selectedCard?.colorText
                  : "#595959",
              }}
            >
              {selectedCard?.institutionName
                ? `Bem vindo ao gerenciamento do seu Cartão ${selectedCard?.institutionName}`
                : "Adicione aqui seus cartões e contas para manter um controle indivídual de cada um deles"}
            </SubtitlePage>
          </Container>

          {cards.length === 0 ? (
            <View style={{ margin: 32 }}>
              <FakeCard />
            </View>
          ) : (
            <ContainerCarousel
              style={{
                marginBottom: selectedCard?.id ? 120 : 0,
                marginTop: selectedCard?.id ? 18 : 50,
              }}
            >
              <CustomCarousel onChangeCard={(card) => setSelectedCard(card)} />
            </ContainerCarousel>
          )}

          {!selectedCard?.id && (
            <ContainerCards>
              <CardImageContainer>
                <CardImage source={cardImage} />

                <CardDescriptionText>
                  Aqui serão listadas as operações envolvendo seu cartão/conta.
                  Por isso é importante vincular suas operações corretamente ao
                  criá-las.
                </CardDescriptionText>
              </CardImageContainer>
            </ContainerCards>
          )}
        </ContainerColor>
        {selectedCard?.id && <Operations card={selectedCard} />}
      </ScrollView>

      <Navigation
        activeRoute="Cards"
        activeColor={
          selectedCard?.colorBackground
            ? hexToRgb(selectedCard?.colorBackground, "0.7")
            : "rgba(1, 55, 148, 0.8)"
        }
      />
    </>
  );
};
