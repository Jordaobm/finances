import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import charts from "../../assets/charts.png";
import { CardCategories } from "../../components/CardCategories";
import {
  ContainerCardOperations,
  NotOperation,
  NotOperationSpan,
} from "../../components/CategoriesList/styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Navigation } from "../../components/Navigation";
import { OutputChart } from "../../components/OutputChart";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { SearchIcon } from "../../icons/Icons";
import { getOperationForFilter } from "../../services/realm";
import { Category, Operation } from "../../types";
import {
  ChartsContainer,
  Container,
  ContainerImage,
  ContainerInput,
  Filter,
  FilterButton,
  FilterButtonText,
  FilterText,
  OperationImage,
  SubtitlePage,
  TitlePage,
} from "./styles";

export const Charts = () => {
  const { config } = useUpdateDataContext();

  const [operations, setOperations] = useState<Operation[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    initialDate: config?.firstDayMonth || "",
    finishDate: config?.lastDayMonth || "",
  });

  useEffect(async () => {
    const operationsFilter = await (
      await getOperationForFilter(form)
    )?.filter((e) => e?.type === "OUTPUT");

    setOperations(operationsFilter);
  }, []);

  useEffect(() => {
    let categoriesFilter: Category[] = [];

    operations?.forEach((operation) => {
      if (
        categoriesFilter?.findIndex(
          (e) => e?.id === operation?.category?.id
        ) === -1
      ) {
        categoriesFilter.push(operation?.category);
      }
    });

    categoriesFilter = categoriesFilter?.map((category) => {
      let operationByCategory = operations?.filter(
        (e) => e?.category?.id === category?.id
      );

      let accumuledValue = 0;
      operationByCategory.forEach((e) => {
        accumuledValue = accumuledValue + Number(e?.value);
      });

      return { ...category, accumuledValue };
    });
    setCategories(categoriesFilter);
  }, [operations]);

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
                  setOperations(
                    await (
                      await getOperationForFilter(form)
                    )?.filter((e) => e?.type === "OUTPUT")
                  );
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

        <ChartsContainer>
          <OutputChart
            operations={operations}
            colorText={"#343434"}
            title="Gastos por categoria"
          />

          <ContainerCardOperations
            style={{ marginTop: 18, backgroundColor: "#FBFBFB" }}
          >
            {categories?.length > 0 ? (
              <CardCategories categories={categories} />
            ) : (
              <>
                <NotOperation>Ainda não há categorias cadastradas</NotOperation>
                <NotOperationSpan>
                  Cadastre uma operação e ela aparecerá aqui!
                </NotOperationSpan>
              </>
            )}
          </ContainerCardOperations>
        </ChartsContainer>
      </ScrollView>

      <Navigation activeRoute="Charts" />
    </>
  );
};
