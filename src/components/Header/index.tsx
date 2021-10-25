import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import React from "react";
import settings from "../../assets/settings.png";
import { HeaderProps } from "../../types";
import {
  Button,
  Container,
  ContainerText,
  Day,
  DayNumber,
  Month,
  Rest,
  Settings,
} from "./styles";

export const Header = ({ color, onlySettings = false }: HeaderProps) => {
  const date = format(new Date(), "cccc', 'dd 'de' MMMM", { locale: ptBR });

  const navigation = useNavigation();

  let day;

  if (date.indexOf("-") === -1) {
    day = date?.split(",")[0];
  } else {
    day = date?.split("-")[0];
  }

  const rest = date?.split(",")[1];

  return (
    <Container>
      <Button onPress={() => navigation.navigate("Configuration")}>
        <Settings source={settings} style={{ tintColor: color }} />
      </Button>
      {!onlySettings && (
        <ContainerText>
          <Day style={{ color }}>{day},</Day>
          <Rest>
            <DayNumber style={{ color }}>{rest?.split("de")[0]}de</DayNumber>
            <Month style={{ color }}>{rest?.split("de")[1]}</Month>
          </Rest>
        </ContainerText>
      )}
    </Container>
  );
};
