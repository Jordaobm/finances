import { Card, Category, Operation } from "../../types";
import { formatCurrency } from "../formatCurrency";
import {
  getLastOperation,
  getLastOperationByCategory,
} from "../getLastOperation";

let operations: Operation[] = [
  {
    card: {
      colorBackground: "#282b46",
      colorBackgroundNumber: 47,
      colorText: "rgba(270,270,270,1)",
      colorTextNumber: 270,
      currentValue: 90.6,
      id: "1",
      institutionName: "Carteira",
      name: "Carteira",
    },
    category: {
      accumuledValue: 256.37,
      color: "#cd4d11",
      id: "1633398822383",
      name: "Mercado (casa)",
      number: 240.58718299865723,
    },
    date: "23/10/2021",
    for: {} as Card,
    id: "1635000450447",
    name: "Coca cola",
    origin: {} as Card,
    type: "OUTPUT",
    value: 9.39,
  },
  {
    card: {
      colorBackground: "#282b46",
      colorBackgroundNumber: 47,
      colorText: "rgba(270,270,270,1)",
      colorTextNumber: 270,
      currentValue: 90.6,
      id: "1",
      institutionName: "Carteira",
      name: "Carteira",
    },
    category: {
      accumuledValue: 3893.11,
      color: "rgba(128, 90, 213, 1  )",
      id: "1633398879741",
      name: "Transferências",
      number: 174.80120468139648,
    },
    date: "23/10/2021",
    for: {
      colorBackground: "#282b46",
      colorBackgroundNumber: 47,
      colorText: "rgba(270,270,270,1)",
      colorTextNumber: 270,
      currentValue: 90.6,
      id: "1",
      institutionName: "Carteira",
      name: "Carteira",
    },
    id: "1635000396814",
    name: "Transferência",
    origin: {
      colorBackground: "rgba(1, 55, 148, 0.8)",
      colorBackgroundNumber: 0,
      colorText: "#ffffff",
      colorTextNumber: 275,
      currentValue: 118.93000000000006,
      id: "1633398954492",
      institutionName: "Caixa econômica",
      name: "JORDÃO B MASSARIOL",
    },
    type: "POUPED",
    value: 600,
  },
  {
    card: {
      colorBackground: "#282b46",
      colorBackgroundNumber: 47,
      colorText: "rgba(270,270,270,1)",
      colorTextNumber: 270,
      currentValue: 90.6,
      id: "1",
      institutionName: "Carteira",
      name: "Carteira",
    },
    category: {
      accumuledValue: 500,
      color: "rgba(197, 48, 48, 1  )",
      id: "1635000545505",
      name: "Dinheiro da vovó",
      number: 191.3680076599121,
    },
    date: "23/10/2021",
    for: {} as Card,
    id: "1635000577024",
    name: "Dinheiro da vovó",
    origin: {} as Card,
    type: "OUTPUT",
    value: 500,
  },
  {
    card: {
      colorBackground: "rgba(1, 55, 148, 0.8)",
      colorBackgroundNumber: 0,
      colorText: "#ffffff",
      colorTextNumber: 275,
      currentValue: 118.93000000000006,
      id: "1633398954492",
      institutionName: "Caixa econômica",
      name: "JORDÃO B MASSARIOL",
    },
    category: {
      accumuledValue: 256.37,
      color: "#cd4d11",
      id: "1633398822383",
      name: "Mercado (casa)",
      number: 240.58718299865723,
    },
    date: "18/10/2021",
    for: {} as Card,
    id: "1634594076293",
    name: "Mercado (casa)",
    origin: {} as Card,
    type: "OUTPUT",
    value: 44.68,
  },
];

let category: Category = {
  accumuledValue: 256.37,
  color: "#cd4d11",
  id: "1633398822383",
  name: "Mercado (casa)",
  number: 240.58718299865723,
};

it("must be able to search for the last operation among the operations", async () => {
  const lastOperation = getLastOperation(operations);

  expect(lastOperation).toEqual(
    operations?.find((e) => e?.id === "1635000577024")
  );
});

it("must be able to search for the last operation of the selected category ", async () => {
  const lastOperationByCategory = getLastOperationByCategory(
    operations,
    category
  );

  expect(lastOperationByCategory).toEqual(
    operations?.find((e) => e?.id === "1635000450447")
  );
});

it("must be able to format a number in BRL  ", async () => {
  const value = 0;

  const formatted = formatCurrency(value);

  expect(formatted).toEqual(" R$0,00");
});

it("must be able to format a negative number in BRL  ", async () => {
  const value = -10;

  const formatted = formatCurrency(value);

  expect(formatted).toEqual("- R$10,00");
});
