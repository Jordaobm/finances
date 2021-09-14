import React from "react";
import { Image, Text } from "react-native";
import { Container, Day, Settings, ContainerText, Rest } from "./styles";
import settings from "../../assets/settings.png";
import { format } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
interface Header {
  color: "white" | "black";
}

export const Header = ({ color }: Header) => {
  const date = format(new Date(), "cccc', 'dd 'de' MMMM", { locale: ptBR });

  const day = date?.split("-")[0];
  const rest = date?.split(",")[1];

  return (
    <Container>
      <Settings
        source={settings}
        style={{ tintColor: color, width: 20, height: 20 }}
      />

      <ContainerText>
        <Day style={{ color }}>{day},</Day>
        <Rest style={{ color }}>{rest}</Rest>
      </ContainerText>
    </Container>
  );
};
