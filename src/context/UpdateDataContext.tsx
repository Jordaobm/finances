import React, { createContext, ReactNode, useContext, useState } from "react";
import {
  getCards,
  getCarteira,
  getCategories,
  getConfiguration,
  getOperations,
  updateConfigRealm,
} from "../services/realm";
import { Card, Category, Config, Operation, FormChartFilter } from "../types";

interface UpdateDataContextProps {
  updateCategory: Category;
  setUpdateCategory: (category: Category) => void;

  updateCard: Card;
  setUpdateCard: (card: Card) => void;

  updateOperation: Operation;
  setUpdateOperation: (operation: Operation) => void;

  selectedCard: Card;
  setSelectedCard: (card: Card) => void;

  categories: Category[];
  setCategories: (categories: Category[]) => void;

  cards: Card[];
  setCards: (cards: Card[]) => void;

  operations: Operation[];
  setOperations: (operations: Operation[]) => void;

  wallet: Card;
  setWallet: (wallet: Card) => void;

  config: Config;
  setConfig: (config: Config) => void;

  updateConfig: (config: Config) => void;

  filterOperations: Operation[];
  setFilterOperations: (operations: Operation[]) => void;

  pageChartOperationsByFilter: Operation[];
  setPageChartOperationsByFilter: (operations: Operation[]) => void;

  pageChartCategoriesByFilter: Category[];
  setPageChartCategoriesByFilter: (categories: Category[]) => void;

  formChartFilter: FormChartFilter;
  setFormChartFilter: (form: FormChartFilter) => void;
}
const UpdateDataContext = createContext({} as UpdateDataContextProps);

interface UpdateDataContextProviderProps {
  children: ReactNode;
}
export const UpdateDataContextProvider = ({
  children,
}: UpdateDataContextProviderProps) => {
  const [wallet, setWallet] = useState<Card>({} as Card);

  const [updateCategory, setUpdateCategory] = useState<Category>(
    {} as Category
  );
  const [updateCard, setUpdateCard] = useState<Card>({} as Card);
  const [updateOperation, setUpdateOperation] = useState<Operation>(
    {} as Operation
  );

  const [categories, setCategories] = useState<Category[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [operations, setOperations] = useState<Operation[]>([]);

  const [selectedCard, setSelectedCard] = useState<Card>({} as Card);

  const [config, setConfig] = useState<Config>({} as Config);

  const [filterOperations, setFilterOperations] = useState<Operation[]>([]);

  const [formChartFilter, setFormChartFilter] = useState<FormChartFilter>(
    {} as FormChartFilter
  );

  const [pageChartOperationsByFilter, setPageChartOperationsByFilter] =
    useState<Operation[]>([]);

  const [pageChartCategoriesByFilter, setPageChartCategoriesByFilter] =
    useState<Category[]>([]);

  async function updateConfig(config: Config) {
    setConfig(await updateConfigRealm(config).then((data) => data));

    // atualizando informações
    setCategories(await getCategories().then((data) => data));
    setCards(await getCards().then((data) => data));
    setWallet(await getCarteira().then((data) => data));
    setOperations(await getOperations().then((data) => data));
    setConfig(await getConfiguration().then((data) => data));
  }

  return (
    <UpdateDataContext.Provider
      value={{
        updateCategory,
        setUpdateCategory,
        categories,
        setCategories,
        cards,
        setCards,
        updateCard,
        setUpdateCard,
        selectedCard,
        setSelectedCard,
        updateOperation,
        setUpdateOperation,
        wallet,
        setWallet,
        operations,
        setOperations,
        config,
        setConfig,
        updateConfig,
        filterOperations,
        setFilterOperations,
        pageChartOperationsByFilter,
        setPageChartOperationsByFilter,
        pageChartCategoriesByFilter,
        setPageChartCategoriesByFilter,
        formChartFilter,
        setFormChartFilter,
      }}
    >
      {children}
    </UpdateDataContext.Provider>
  );
};

export const useUpdateDataContext = (): UpdateDataContextProps => {
  return useContext(UpdateDataContext);
};
