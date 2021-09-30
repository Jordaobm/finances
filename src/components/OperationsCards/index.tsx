import { format, lastDayOfMonth, startOfMonth } from "date-fns";
import React from "react";
import { Text } from "react-native";
import ptBR from "date-fns/locale/pt-BR";
import {
  Container,
  ContainerCards,
  EntryCard as Card,
  Icon,
  IntervalDates,
  Month,
  MonthContainer,
  MonthText,
  Title,
  TitleContainer,
  Value,
} from "./styles";
import arrowUp from "../../assets/arrow-up.png";
import arrowDown from "../../assets/arrow-down.png";
import { formatCurrency } from "../../utils/formatCurrency";
import { useUpdateDataContext } from "../../context/UpdateDataContext";

export const OperationsCards = () => {
  const date = format(new Date(), "MMMM", { locale: ptBR })?.split("-")[0];
  const firstDayMonth = format(startOfMonth(new Date()), "dd/MM/yyyy");
  const lastDayMonth = format(lastDayOfMonth(new Date()), "dd/MM/yyyy");

  const { operations } = useUpdateDataContext();

  let inputOperationValue = 0;
  let outputOperationValue = 0;
  operations?.map((operation) => {
    if (operation?.type === "INPUT") {
      inputOperationValue = inputOperationValue + Number(operation?.value);
    }

    if (operation?.type === "OUTPUT") {
      outputOperationValue = outputOperationValue + Number(operation?.value);
    }
  });

  return (
    <Container>
      <MonthContainer>
        <MonthText>Operações em </MonthText>
        <Month>{date}</Month>
      </MonthContainer>
      <IntervalDates>
        {firstDayMonth} até {lastDayMonth}
      </IntervalDates>

      <ContainerCards>
        <Card>
          <TitleContainer>
            <Title>Entradas</Title>
            <Icon source={arrowUp} />
          </TitleContainer>
          <Value color="#3CC75E">{formatCurrency(inputOperationValue)}</Value>
        </Card>

        <Card>
          <TitleContainer>
            <Title>Saídas</Title>
            <Icon source={arrowDown} />
          </TitleContainer>
          <Value color="#FF6F6F">{formatCurrency(outputOperationValue)}</Value>
        </Card>
      </ContainerCards>
    </Container>
  );
};
