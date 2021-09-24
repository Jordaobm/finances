import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { FakeCard } from "../../components/Card";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import {
  CardDescriptionText,
  CardImage,
  CardImageContainer,
  Container,
  ContainerCards,
  SubtitlePage,
  TitlePage,
} from "./styles";
import cardImage from "../../assets/card.png";

export const Cards = () => {
  return (
    <>
      <StatusBar hidden />
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Header color="#595959" onlySettings />

        <Container>
          <TitlePage>Contas e Cartões</TitlePage>
          <SubtitlePage>
            Adicione aqui seus cartões e contas para manter um controle
            indivídual de cada um deles
          </SubtitlePage>
        </Container>

        <ContainerCards>
          <FakeCard />

          <CardImageContainer>
            <CardImage source={cardImage} />

            <CardDescriptionText>
              Aqui serão listadas as operações envolvendo seu cartão/conta. Por
              isso é importante vincular suas operações corretamente ao
              criá-las.
            </CardDescriptionText>
          </CardImageContainer>
        </ContainerCards>
      </ScrollView>

      <Navigation activeRoute="Cards" />
    </>
  );
};
