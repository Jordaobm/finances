import React from "react";
import { ScrollView, StatusBar } from "react-native";
import categoriesImage from "../../assets/829.jpg";
import { CategoriesList } from "../../components/CategoriesList";
import { Header } from "../../components/Header";
import { NavigationBar } from "../../components/Navigation";
import {
  CategoriesImage,
  Container,
  ContainerImage,
  SubtitlePage,
  TitlePage,
} from "./styles";

export const Categories = () => {
  return (
    <>
      <StatusBar hidden />

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

      <NavigationBar activeRoute="Categories" />
    </>
  );
};
