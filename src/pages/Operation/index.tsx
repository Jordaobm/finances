import React, { useState } from "react";
import { ActivityIndicator, ScrollView, StatusBar, Text } from "react-native";
import Toast from "react-native-toast-message";
import operacoes from "../../assets/operacoes.png";
import { FlatListOperations } from "../../components/FlatList";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Navigation } from "../../components/Navigation";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { SearchIcon } from "../../icons/Icons";
import { getOperationForFilter } from "../../services/realm";
import {
  Container,
  ContainerImage,
  ContainerInput,
  ContainerLoading,
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

export const Operation = () => {
  const { setFilterOperations, filterOperations } = useUpdateDataContext();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    initialDate: "",
    finishDate: "",
  });

  return (
    <>
      <StatusBar hidden />

      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Header color="#595959" onlySettings />

        <Container>
          <TitlePage>Operações</TitlePage>
          <SubtitlePage>
            Entradas e saídas. As operações são todos os registros que você faz
            na aplicação. Valores recebidos, valores pagos e/ou retirados de
            seus fundos, tudo deve ser registrado para ter o controle de suas
            finanças
          </SubtitlePage>

          <ContainerImage>
            <OperationImage source={operacoes} />
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

        <ContainerOperation>
          {loading ? (
            <LoadingContainer>
              <ActivityIndicator color="rgba(1, 55, 148, 0.8)" />
            </LoadingContainer>
          ) : (
            <FlatListOperations
              border
              addOperation={false}
              color="#595959"
              operationText="Operações encontradas"
              listOperations={filterOperations}
            />
          )}
        </ContainerOperation>
      </ScrollView>

      <Navigation activeRoute="Operation" />
    </>
  );
};
