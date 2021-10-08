import React, { useState } from "react";
import { ActivityIndicator, ScrollView, StatusBar, Text } from "react-native";
import Toast from "react-native-toast-message";
import charts from "../../assets/charts.png";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Navigation } from "../../components/Navigation";
import { Operations } from "../../components/Operations";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { SearchIcon } from "../../icons/Icons";
import { getOperationForFilter } from "../../services/realm";
import {
  ChartsContainer,
  Container,
  ContainerImage,
  ContainerInput,
  ContainerOperation,
  Filter,
  FilterButton,
  FilterButtonText,
  FilterText,
  LoadingContainer,
  OperationImage,
  SubtitlePage,
  TitlePage,
} from "./styles";

export const Charts = () => {
  const { setFilterOperations, filterOperations } = useUpdateDataContext();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    initialDate: "",
    finishDate: "",
  });

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
                  setForm((state) => ({ ...state, initialDate }))
                }
                value={form?.initialDate}
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                maskDate
                placeholder="Data Final"
                keyboardType="number-pad"
                onChangeText={(finishDate) =>
                  setForm((state) => ({ ...state, finishDate }))
                }
                value={form?.finishDate}
              />
            </ContainerInput>

            <FilterButton
              onPress={async () => {
                if (form?.initialDate?.length !== 10) {
                  Toast.show({
                    type: "error",
                    text1: "Data inicial inválida",
                    text2: "A data precisa conter dia, mês e ano",
                    autoHide: true,
                  });
                } else if (form?.finishDate?.length !== 10) {
                  Toast.show({
                    type: "error",
                    text1: "Data final inválida",
                    text2: "A data precisa conter dia, mês e ano",
                    autoHide: true,
                  });
                } else {
                  setLoading(true);
                  setFilterOperations(await getOperationForFilter(form));
                  setTimeout(() => {
                    setLoading(false);
                  }, 2000);
                }
              }}
            >
              <FilterButtonText>Buscar</FilterButtonText>

              <SearchIcon color="#fff" />
            </FilterButton>
          </Filter>
        </Container>
      </ScrollView>

      <ChartsContainer></ChartsContainer>

      <Navigation activeRoute="Operation" />
    </>
  );
};
