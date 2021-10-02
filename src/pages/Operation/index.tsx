import React, { useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import operacoes from "../../assets/operacoes.png";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Navigation } from "../../components/Navigation";
import { Operations } from "../../components/Operations";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { getOperationForFilter } from "../../services/realm";
import {
  Container,
  ContainerImage,
  ContainerInput,
  ContainerOperation,
  Filter,
  FilterButton,
  FilterButtonText,
  FilterText,
  OperationImage,
  SubtitlePage,
  TitlePage,
} from "./styles";

export const Operation = () => {
  const { setFilterOperations, filterOperations } = useUpdateDataContext();

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
                  setFilterOperations(await getOperationForFilter(form));
                }
              }}
            >
              <FilterButtonText>Buscar</FilterButtonText>
            </FilterButton>
          </Filter>
        </Container>

        <ContainerOperation>
          <Operations
            addOperation={false}
            color="#595959"
            operationText="Operações encontradas"
            listOperations={filterOperations}
          />
        </ContainerOperation>
      </ScrollView>

      <Navigation activeRoute="Operation" />
    </>
  );
};
