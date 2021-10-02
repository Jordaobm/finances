import { useNavigation } from "@react-navigation/core";
import { format, lastDayOfMonth, startOfMonth } from "date-fns";
import React, { useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import { Input } from "../../components/Input";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { ArrowLeftIcon } from "../../icons/Icons";
import { Config } from "../../types";
import { monthAndYearToDate } from "../../utils/monthAndYearToDate";
import {
  AcceptText,
  Action,
  Actions,
  CancelText,
  Container,
  ContainerInput,
  FormContainer,
  GoBack,
  SubtitlePage,
  TitlePage,
} from "./styles";

export const Configuration = () => {
  const navigation = useNavigation();

  const { config, updateConfig } = useUpdateDataContext();

  const [form, setForm] = useState<Config>(config);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(1, 55, 148, 0.0)"
        translucent
        hidden
      />
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Container>
          <GoBack
            onPress={() => {
              navigation.navigate("Categories");
            }}
          >
            <ArrowLeftIcon color="#595959" />
          </GoBack>
          <TitlePage>Configurações</TitlePage>
          <SubtitlePage>
            Nas configurações você poderá escolher qual mês deseja mostrar
          </SubtitlePage>

          <FormContainer>
            <ContainerInput>
              <Input
                maskMonth
                placeholder="Mês e ano"
                onChangeText={(monthYear) => setForm({ monthYear })}
                value={form?.monthYear}
              />
            </ContainerInput>
          </FormContainer>
        </Container>
      </ScrollView>
      <Actions>
        <Action
          onPress={() => {
            navigation.goBack();
          }}
        >
          <CancelText>Cancelar</CancelText>
        </Action>
        <Action
          onPress={async () => {
            const firstDayMonth = format(
              startOfMonth(monthAndYearToDate(form?.monthYear)),
              "dd/MM/yyyy"
            );
            const lastDayMonth = format(
              lastDayOfMonth(monthAndYearToDate(form?.monthYear)),
              "dd/MM/yyyy"
            );

            await updateConfig({ ...form, firstDayMonth, lastDayMonth });

            navigation.goBack();
          }}
        >
          <AcceptText>Salvar</AcceptText>
        </Action>
      </Actions>
    </>
  );
};
