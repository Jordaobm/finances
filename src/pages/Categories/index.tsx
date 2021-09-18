import React from "react";
import { Image, ScrollView, StatusBar } from "react-native";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import {
  Container,
  TitlePage,
  SubtitlePage,
  CategoriesImage,
  ContainerImage,
} from "./styles";

import categoriesImage from "../../assets/829.jpg";
import { CategoriesList } from "../../components/CategoriesList";

export const Categories = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(1, 55, 148, 0.0)"
        translucent
      />

      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Header color="#595959" onlySettings />

        <Container>
          <TitlePage>Categorias</TitlePage>
          <SubtitlePage>
            Organize suas contas por categoria, facilitando sua análise e
            entendimento dos gastos no fim do mês
          </SubtitlePage>

          <ContainerImage>
            <CategoriesImage source={categoriesImage} />
          </ContainerImage>

          <CategoriesList />
        </Container>
      </ScrollView>

      <Navigation activeRoute="Categories" />
    </>
  );
};
