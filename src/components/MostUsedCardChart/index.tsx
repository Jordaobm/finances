import React from "react";
import { PieChart } from "react-native-svg-charts";
import { CardIcon, WalletIcon } from "../../icons/Icons";
import { Card, Operation } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";
import { Labels } from "./Labels";
import {
  Bullet,
  Container,
  ContainerCard,
  ContainerCardName,
  ContainerTitle,
  Icone,
  SingleCard,
  Title,
  TitleCard,
  ValueCard,
} from "./styles";

interface OutputChartProps {
  operations: Operation[];
  colorText?: string;
  title?: string;
}

export function valueAccessor({ item }: any) {
  return item?.amount;
}

export const MostUsedCardChart = ({
  operations,
  colorText,
  title,
}: OutputChartProps) => {
  const outPutOperations: Operation[] = operations?.filter(
    (e) => e?.type === "OUTPUT"
  );
  let outPutCards: Card[] = [];

  outPutOperations?.forEach((operation) => {
    if (!outPutCards?.find((e) => e?.id === operation?.card?.id)) {
      outPutCards.push(operation?.card);
    }
  });

  let total = 0;

  outPutCards = outPutCards?.map((card) => {
    let outputValueInCard = 0;
    outPutOperations.forEach((op) => {
      if (card?.id === op?.card?.id) {
        outputValueInCard = Number(outputValueInCard) + Number(op?.value);
      }
    });
    total = total + Number(outputValueInCard);
    return { ...card, currentValue: outputValueInCard };
  });

  const data = outPutCards?.map((card) => ({
    key: card?.id,
    amount: Number((100 * Number(card?.currentValue)) / total)
      .toFixed(2)
      ?.toString(),
    svg: { fill: card?.colorBackground },
    cardName: card?.institutionName,
  }));

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <PieChart
        style={{ height: 200 }}
        testID="pieChartTestId"
        valueAccessor={valueAccessor}
        data={data}
        spacing={0}
        outerRadius={"100%"}
      >
        <Labels colorText={colorText} />
      </PieChart>

      <ContainerCard>
        {outPutCards?.map((card) => (
          <SingleCard key={card?.id}>
            <ContainerCardName>
              <Bullet color={card?.colorBackground} />

              <ContainerTitle>
                <TitleCard>{card?.institutionName}</TitleCard>
              </ContainerTitle>

              <Icone>
                {card?.id === "1" ? (
                  <WalletIcon color={card?.colorBackground} />
                ) : (
                  <CardIcon color={card?.colorBackground} />
                )}
              </Icone>
            </ContainerCardName>

            <ValueCard color={card?.colorBackground}>
              {formatCurrency(Number(card?.currentValue))}
            </ValueCard>
          </SingleCard>
        ))}
      </ContainerCard>
    </Container>
  );
};
