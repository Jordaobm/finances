import { Category, Operation } from "./types";

export const categories: Category[] = [
  { color: "#db7311", id: "1", name: "Salário", number: 285.74153900146484 },
  {
    color: "#b94ab3",
    id: "2",
    name: "Despesas da casa",
    number: 241.26537704467773,
  },
  {
    color: "#43acf4",
    id: "3",
    name: "Despesas fixas",
    number: 88.11928939819336,
  },
];

export const operations: Operation[] = [
  {
    id: "1",
    category: {
      color: "#db7311",
      id: "1",
      name: "Salário",
      number: 285.74153900146484,
    },
    date: "25/09/2021",
    name: "Salário",
    type: "INPUT",
    value: 2000,
    card: {
      id: "1",
      colorBackground: "#0070B7",
      colorText: "#FFFFFF",
      currentValue: 2000,
      institutionName: "Caixa Econômica Federal",
      name: "JORDÃO BEGHETTO MASSARIOL",
    },
  },

  {
    id: "2",
    category: {
      color: "#b94ab3",
      id: "2",
      name: "Despesas da casa",
      number: 241.26537704467773,
    },
    date: "25/09/2021",
    name: "Mercado",
    type: "OUTPUT",
    value: 200,
    card: {
      id: "1",
      colorBackground: "#0070B7",
      colorText: "#FFFFFF",
      currentValue: 2000,
      institutionName: "Caixa Econômica Federal",
      name: "JORDÃO BEGHETTO MASSARIOL",
    },
  },
];

export const typeOperation = [
  {
    label: "Entrada",
    value: "INPUT",
  },
  {
    label: "Saída",
    value: "OUTPUT",
  },
  {
    label: "Poupança",
    value: "POUPED",
  },
];
