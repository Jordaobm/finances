import React from "react";
import { BulletsIcon } from "../../icons/Icons";
import {
  BorderWallet,
  Bullets,
  ButtonText,
  CardContent,
  ChipImage,
  Container,
  DataCard,
  InstitutionName,
  LineWallet,
  Name,
  TouchAddCard,
  Value,
  ValueWallet,
  WalletContent,
} from "./styles";
import chip from "../../assets/chip.png";
import { Card } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "../../utils/formatCurrency";
import { useUpdateDataContext } from "../../context/UpdateDataContext";

interface CardProps {
  card: Card;
}

export const CardComponent = ({ card }: CardProps) => {
  const navigation = useNavigation();
  const { setUpdateCard } = useUpdateDataContext();

  if (card?.institutionName === "Carteira") {
    return (
      <Container>
        <WalletContent
          testID="selectWallet"
          style={{ backgroundColor: card?.colorBackground, opacity: 1 }}
          onPress={() => {
            setUpdateCard(card);
            navigation.navigate("CardForm");
          }}
        >
          <LineWallet />

          <BorderWallet />

          <ValueWallet>
            <Value style={{ color: card?.colorText }}>
              {formatCurrency(Number(card?.currentValue))}
            </Value>
          </ValueWallet>
        </WalletContent>
      </Container>
    );
  }

  return (
    <Container>
      <CardContent
        style={{ backgroundColor: card?.colorBackground, opacity: 1 }}
        testID="selectCard"
        onPress={() => {
          setUpdateCard(card);
          navigation.navigate("CardForm");
        }}
      >
        <Bullets>
          <BulletsIcon color={card?.colorText} />
        </Bullets>

        <ChipImage source={chip} />

        <DataCard>
          <Value style={{ color: card?.colorText }}>
            {formatCurrency(Number(card?.currentValue))}
          </Value>
          <Name style={{ color: card?.colorText }}>{card?.name}</Name>
        </DataCard>

        <InstitutionName style={{ color: card?.colorText }}>
          {card?.institutionName}
        </InstitutionName>
      </CardContent>
    </Container>
  );
};

export const FakeCard = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <CardContent
        testID="selectFakeCard"
        onPress={() => navigation.navigate("CardForm")}
      >
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
      <TouchAddCard
        testID="addCard"
        onPress={() => navigation.navigate("CardForm")}
      >
        <ButtonText>Toque para adicionar um cartão</ButtonText>
      </TouchAddCard>
    </Container>
  );
};
