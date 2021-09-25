import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCards, getCategories } from "../services/realm";
import { Card, Category, Operation } from "../types";

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
}
const UpdateDataContext = createContext({} as UpdateDataContextProps);

interface UpdateDataContextProviderProps {
  children: ReactNode;
}
export const UpdateDataContextProvider = ({
  children,
}: UpdateDataContextProviderProps) => {
  const [updateCategory, setUpdateCategory] = useState<Category>(
    {} as Category
  );
  const [updateCard, setUpdateCard] = useState<Card>({} as Card);
  const [updateOperation, setUpdateOperation] = useState<Operation>(
    {} as Operation
  );

  const [categories, setCategories] = useState<Category[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  const [selectedCard, setSelectedCard] = useState<Card>({} as Card);

  useEffect(async () => {
    setCategories(await getCategories().then((data) => data));
  }, []);

  useEffect(async () => {
    setCards(await getCards().then((data) => data));
  }, []);

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
      }}
    >
      {children}
    </UpdateDataContext.Provider>
  );
};

export const useUpdateDataContext = (): UpdateDataContextProps => {
  return useContext(UpdateDataContext);
};
