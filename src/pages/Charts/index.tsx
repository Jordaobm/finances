import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import charts from "../../assets/charts.png";
import { CardCategories } from "../../components/CardCategories";
import { ContainerCardOperations } from "../../components/CategoriesList/styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MostUsedCardChart } from "../../components/MostUsedCardChart";
import { NavigationBar } from "../../components/Navigation";
import { OutputChart } from "../../components/OutputChart";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { SearchIcon } from "../../icons/Icons";
import { getOperationForFilter } from "../../services/realm";
import { extractCategoriesByOperations } from "../../utils/extractCategoriesByOperations";
import {
  ChartsContainer,
  Container,
  ContainerImage,
  ContainerInput,
  ContainerLoading,
  ContainerNotOperation,
  Filter,
  FilterButton,
  FilterButtonText,
  FilterText,
  MostUsedCard,
  NotOperation,
  OperationImage,
  OutputCategoryChart,
  SubtitlePage,
  TitlePage,
} from "./styles";

export const Charts = () => {
  const {
    pageChartOperationsByFilter,
    setPageChartOperationsByFilter,
    setPageChartCategoriesByFilter,
    formChartFilter,
    setFormChartFilter,
  } = useUpdateDataContext();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPageChartCategoriesByFilter(
      extractCategoriesByOperations(pageChartOperationsByFilter)
    );
  }, [pageChartOperationsByFilter]);

  return (
    <>
      <StatusBar hidden />

      <ScrollView style={{ flex: 1, backgroundColor: "#FBFBFB" }}>
        <Header color="#595959" onlySettings />

        <Container>
          <TitlePage>Análises e gráficos</TitlePage>
          <SubtitlePage>
            Nesta área você poderá encontrar por análises e gráficos que
            evidenciem suas entradas e saídas durante o período que selecionar
          </SubtitlePage>

          <ContainerImage>
            <OperationImage source={charts} />
          </ContainerImage>

          <Filter>
            <FilterText>Filtrar operações</FilterText>

            <ContainerInput>
              <Input
                maskDate
                placeholder="Data Inicial"
                keyboardType="number-pad"
                onChangeText={(initialDate) =>
                  setFormChartFilter({ ...formChartFilter, initialDate })
                }
                value={formChartFilter?.initialDate}
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                maskDate
                placeholder="Data Final"
                keyboardType="number-pad"
                onChangeText={(finishDate) =>
                  setFormChartFilter({ ...formChartFilter, finishDate })
                }
                value={formChartFilter?.finishDate}
              />
            </ContainerInput>

            <FilterButton
              onPress={async () => {
                if (formChartFilter?.initialDate?.length !== 10) {
                  Toast.show({
                    type: "error",
                    text1: "Data inicial inválida",
                    text2: "A data precisa conter dia, mês e ano",
                    autoHide: true,
                  });
                } else if (formChartFilter?.finishDate?.length !== 10) {
                  Toast.show({
                    type: "error",
                    text1: "Data final inválida",
                    text2: "A data precisa conter dia, mês e ano",
                    autoHide: true,
                  });
                } else {
                  setLoading(true);
                  setPageChartOperationsByFilter(
                    await getOperationForFilter(formChartFilter)
                  );
                  setTimeout(() => {
                    setLoading(false);
                  }, 2000);
                }
              }}
            >
              {loading ? (
                <ContainerLoading>
                  <ActivityIndicator color="#fff" />
                </ContainerLoading>
              ) : (
                <>
                  <FilterButtonText>Buscar</FilterButtonText>
                  <SearchIcon color="#fff" />
                </>
              )}
            </FilterButton>
          </Filter>
        </Container>

        <ChartsContainer>
          {loading ? (
            <ActivityIndicator color="rgba(1, 55, 148, 0.8)" />
          ) : (
            <>
              {extractCategoriesByOperations(
                pageChartOperationsByFilter,
                "OUTPUT"
              )?.length === 0 ? (
                <ContainerNotOperation>
                  <NotOperation>
                    Não há operações para o gráfico de categorias
                  </NotOperation>
                </ContainerNotOperation>
              ) : (
                <>
                  <OutputCategoryChart>
                    <OutputChart
                      operations={pageChartOperationsByFilter}
                      colorText={"#343434"}
                      title="Gastos por categoria"
                    />

                    <ContainerCardOperations
                      style={{ marginTop: 18, backgroundColor: "#FBFBFB" }}
                    >
                      <CardCategories
                        categories={extractCategoriesByOperations(
                          pageChartOperationsByFilter,
                          "OUTPUT"
                        )}
                      />
                    </ContainerCardOperations>
                  </OutputCategoryChart>
                  <MostUsedCard>
                    <MostUsedCardChart
                      operations={pageChartOperationsByFilter}
                      colorText={"#FBFBFB"}
                      title="Gastos em cada cartão"
                    />
                  </MostUsedCard>
                </>
              )}
            </>
          )}
        </ChartsContainer>
      </ScrollView>

      <NavigationBar activeRoute="Charts" />
    </>
  );
};
