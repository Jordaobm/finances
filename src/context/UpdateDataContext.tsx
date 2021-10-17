import React, { createContext, ReactNode, useContext, useState } from "react";
import Toast from "react-native-toast-message";
import {
  addOrExcludeOperationAndUpdateCard,
  createOperationPouped,
  deleteOperationPouped,
  getCards,
  getCarteira,
  getCategories,
  getConfiguration,
  getOperationForFilter,
  getOperations,
  updateConfigRealm,
} from "../services/realm";
import { Card, Category, Config, FormChartFilter, Operation } from "../types";
import { extractCategoriesByOperations } from "../utils/extractCategoriesByOperations";

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

  // métodos de banco de dados
  saveOperation: (operation: Operation, showMessage: boolean) => Promise<void>;
  deleteOperation: (
    operation: Operation,
    showMessage: boolean
  ) => Promise<void>;
  editOperation: (operation: Operation) => Promise<void>;
  savePouped: (operation: Operation) => Promise<void>;
  deletePouped: (operation: Operation) => Promise<void>;
  editPouped: (operation: Operation) => Promise<void>;

  reloadValues: (reloadValuesLoading: any) => void;
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

  async function reloadValues(reloadValuesLoading: any) {
    // atualizando informações
    reloadValuesLoading(0);
    setCategories(await getCategories().then((data) => data));

    reloadValuesLoading(20);
    setCards(await getCards().then((data) => data));

    reloadValuesLoading(40);
    setWallet(await getCarteira().then((data) => data));

    reloadValuesLoading(60);
    setOperations(await getOperations().then((data) => data));

    reloadValuesLoading(80);
    const cfg = await getConfiguration().then((data) => data);
    setConfig(cfg);

    const operationsForChart = await getOperationForFilter({
      initialDate: cfg?.firstDayMonth || "",
      finishDate: cfg?.lastDayMonth || "",
    });

    if (cfg?.firstDayMonth && cfg?.lastDayMonth) {
      setFormChartFilter({
        initialDate: cfg.firstDayMonth,
        finishDate: cfg.lastDayMonth,
      });
    }

    setPageChartOperationsByFilter(operationsForChart);

    setPageChartCategoriesByFilter(
      extractCategoriesByOperations(operationsForChart)
    );

    reloadValuesLoading(100);
  }

  // MÉTODOS DO BANCO DE DADOS

  async function saveOperation(operation: Operation, showMessage: boolean) {
    const formattedOperation: Operation = {
      ...operation,
      value: Number(operation?.value),
    };

    await addOrExcludeOperationAndUpdateCard(formattedOperation, false);
    setCards(await getCards().then((data) => data));
    setOperations(await getOperations());
    setCategories(await getCategories().then((data) => data));
    setWallet(await getCarteira().then((data) => data));
    if (showMessage) {
      Toast.show({
        type: "success",
        text1: "Operação adicionada com sucesso",
        text2: `A operação ${formattedOperation?.name} foi vinculada à ${formattedOperation?.card?.institutionName}`,
        autoHide: true,
      });
    }
  }

  async function deleteOperation(operation: Operation, showMessage: boolean) {
    const formattedOperation: Operation = {
      ...operation,
      type:
        operation?.type === "INPUT"
          ? "OUTPUT"
          : operation?.type === "OUTPUT"
          ? "INPUT"
          : operation?.type,
      value: Number(operation?.value),
    };

    await addOrExcludeOperationAndUpdateCard(formattedOperation, true);
    setCards(await getCards().then((data) => data));
    setOperations(await getOperations());
    setCategories(await getCategories().then((data) => data));
    setWallet(await getCarteira().then((data) => data));
    if (showMessage) {
      Toast.show({
        type: "success",
        text1: "Operação excluída com sucesso",
        text2: `A operação ${formattedOperation?.name} foi desvinculada à ${formattedOperation?.card?.institutionName}`,
        autoHide: true,
      });
    }
  }

  async function editOperation(operation: Operation) {
    const excludeOp = operations?.find((op) => op?.id === operation?.id);

    if (excludeOp) {
      await deleteOperation(excludeOp, false);
      await saveOperation(operation, false);
    }
    setCategories(await getCategories().then((data) => data));
    setWallet(await getCarteira().then((data) => data));
    Toast.show({
      type: "success",
      text1: "Operação editada com sucesso",
      autoHide: true,
    });
  }

  async function savePouped(operation: Operation) {
    await createOperationPouped(operation);
    setCards(await getCards().then((data) => data));
    setOperations(await getOperations());
    setCategories(await getCategories().then((data) => data));
    setWallet(await getCarteira().then((data) => data));
    Toast.show({
      type: "success",
      text1: "Transferência realizada com sucesso",
      text2: `O valor foi transferido do ${
        operation?.origin?.institutionName
          ? operation?.origin?.institutionName
          : operation?.origin?.name
      } para o ${
        operation?.for?.institutionName
          ? operation?.for?.institutionName
          : operation?.for?.name
      }`,
      autoHide: true,
    });
  }

  async function deletePouped(operation: Operation) {
    if (operation?.id) {
      await deleteOperationPouped(operation?.id?.toString());
      setCards(await getCards().then((data) => data));
      setOperations(await getOperations());
      setCategories(await getCategories().then((data) => data));
      setWallet(await getCarteira().then((data) => data));
      Toast.show({
        type: "success",
        text1: "Transferência excluida com sucesso",
        text2: `O valor foi transferido do ${
          operation?.origin?.institutionName
            ? operation?.origin?.institutionName
            : operation?.origin?.name
        } para o ${
          operation?.for?.institutionName
            ? operation?.for?.institutionName
            : operation?.for?.name
        }`,
        autoHide: true,
      });
    }
  }

  async function editPouped(operation: Operation) {
    await deletePouped(operation);
    await savePouped(operation);
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
        saveOperation,
        deleteOperation,
        editOperation,
        savePouped,
        deletePouped,
        editPouped,
        reloadValues,
      }}
    >
      {children}
    </UpdateDataContext.Provider>
  );
};

export const useUpdateDataContext = (): UpdateDataContextProps => {
  return useContext(UpdateDataContext);
};
