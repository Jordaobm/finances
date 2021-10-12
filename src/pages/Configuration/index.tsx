import { useNavigation } from "@react-navigation/core";
import { format, lastDayOfMonth, startOfMonth } from "date-fns";
import React, { useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import { Input } from "../../components/Input";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { ArrowLeftIcon } from "../../icons/Icons";
import { Config } from "../../types";
import { monthAndYearToDate } from "../../utils/monthAndYearToDate";
import pck from "../../../package.json";
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
  Version,
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
              navigation.goBack();
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
                onChangeText={(monthYear) => {
                  if (monthYear?.length === 7) {
                    const firstDayMonth = format(
                      startOfMonth(monthAndYearToDate(monthYear)),
                      "dd/MM/yyyy"
                    );
                    const lastDayMonth = format(
                      lastDayOfMonth(monthAndYearToDate(monthYear)),
                      "dd/MM/yyyy"
                    );
                    setForm((state) => ({
                      ...state,
                      monthYear,
                      firstDayMonth,
                      lastDayMonth,
                    }));
                  }
                }}
                value={form?.monthYear}
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                maskDate
                placeholder="Primeiro dia do período"
                onChangeText={(firstDayMonth) =>
                  setForm((state) => ({ ...state, firstDayMonth }))
                }
                value={form?.firstDayMonth}
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                maskDate
                placeholder="Ultimo dia do período"
                onChangeText={(lastDayMonth) =>
                  setForm((state) => ({ ...state, lastDayMonth }))
                }
                value={form?.lastDayMonth}
              />
            </ContainerInput>
          </FormContainer>
          <Version>Versão {pck?.version}</Version>
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
            await updateConfig({ ...form });
            navigation.goBack();
          }}
        >
          <AcceptText>Salvar</AcceptText>
        </Action>
      </Actions>
    </>
  );
};
