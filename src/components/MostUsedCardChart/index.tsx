import React from "react";
import { Text } from "react-native-svg";
import { PieChart } from "react-native-svg-charts";
import { CardIcon, InputOperationCoin, WalletIcon } from "../../icons/Icons";
import { Card, Operation } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  Container,
  Title,
  ContainerCard,
  SingleCard,
  Bullet,
  TitleCard,
  ValueCard,
  ContainerCardName,
  Icone,
  ContainerTitle,
} from "./styles";

interface LabelProps {
  slices: any;
  height: number;
  width: number;
}

interface OutputChartProps {
  operations: Operation[];
  colorText?: string;
  title?: string;
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
      if (operation?.card) {
        outPutCards.push(operation?.card);
      }
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

  const Labels = ({ slices, height, width }: LabelProps) => {
    return slices.map((slice: any, index: number) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <React.Fragment key={index}>
          <Text
            key={index}
            x={labelCentroid[0]}
            y={labelCentroid[1]}
            fill={colorText ? colorText : "white"}
            textAnchor={"middle"}
            alignmentBaseline={"text-bottom"}
            fontSize={10}
          >
            {`${data?.amount?.replace(".", ",")}% `}
          </Text>
          <Text
            x={labelCentroid[0]}
            y={labelCentroid[1] - 12}
            fill={colorText ? colorText : "white"}
            textAnchor={"middle"}
            alignmentBaseline={"text-bottom"}
            fontSize={10}
          >
            {`${data.cardName}`}
          </Text>
        </React.Fragment>
      );
    });
  };

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <PieChart
        style={{ height: 200 }}
        valueAccessor={({ item }: any) => item?.amount}
        data={data}
        spacing={0}
        outerRadius={"100%"}
      >
        <Labels />
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
