import { Category, Operation } from "./types";

export const categories: Category[] = [
  {
    id: 1,
    color: "#3CC75E",
    name: "Salário",
  },
  {
    id: 2,
    color: "#FF6F6F",
    name: "Despesas da casa",
  },
  {
    id: 3,
    color: "#E1A0FF",
    name: "Despesas fixas",
  },
];

export const operations: Operation[] = [
  {
    id: 1,
    category: {
      id: 1,
      color: "#3CC75E",
      name: "Salário",
    },
    date: new Date(),
    name: "Salário",
    type: "INPUT",
    value: 2000,
    wallet: {
      name: "Carteira Atual",
      currentValue: 1000,
    },
  },

  {
    id: 2,
    category: {
      id: 2,
      color: "#FF6F6F",
      name: "Despesas da casa",
    },
    date: new Date(),
    name: "Mercado",
    type: "OUTPUT",
    value: 200,
    card: {
      id: 1,
      colorBackground: "#0070B7",
      colorText: "#FFFFFF",
      currentValue: 2000,
      institutionName: "Caixa Econômica Federal",
      name: "JORDÃO BEGHETTO MASSARIOL",
    },
  },
];
