import React from "react";
import { BulletsIcon } from "../../icons/Icons";
import {
  Bullets,
  ButtonText,
  CardContent,
  ChipImage,
  Container,
  DataCard,
  InstitutionName,
  Name,
  TouchAddCard,
  Value,
} from "./styles";
import chip from "../../assets/chip.png";
import { Card as CardProps } from "../../types";
import { useNavigation } from "@react-navigation/core";

export const Card = ({}: CardProps) => {
  return (
    <Container>
      <CardContent>
        <Bullets>
          <BulletsIcon color="#595959" />
        </Bullets>
        <ChipImage source={chip} />
      </CardContent>
      <TouchAddCard>Toque para adicionar um cartão</TouchAddCard>
    </Container>
  );
};

export const FakeCard = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <CardContent onPress={() => navigation.navigate("CardForm")}>
        <Bullets style={{ opacity: 0.2 }}>
          <BulletsIcon color="#595959" />
        </Bullets>

        <ChipImage style={{ opacity: 0.2 }} source={chip} />

        <DataCard>
          <Value style={{ opacity: 0.2 }}>R$ X.XXX,XX</Value>
          <Name style={{ opacity: 0.2 }}>Nome do titular</Name>
        </DataCard>

        <InstitutionName style={{ opacity: 0.2 }}>
          Instituição financeira
        </InstitutionName>
      </CardContent>
      <TouchAddCard onPress={() => navigation.navigate("CardForm")}>
        <ButtonText>Toque para adicionar um cartão</ButtonText>
      </TouchAddCard>
    </Container>
  );
};
