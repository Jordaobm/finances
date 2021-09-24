import React, { useEffect, useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import { getCategoriesByDB } from "../database/functions";
import { getCards, getCategories } from "../services/realm";
import { Card, Category } from "../types";

interface UpdateDataContextProps {
  updateCategory: Category;
  setUpdateCategory: (category: Category) => void;

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

  const [categories, setCategories] = useState<Category[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  console.log({ categories, cards });

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
      }}
    >
      {children}
    </UpdateDataContext.Provider>
  );
};

export const useUpdateDataContext = (): UpdateDataContextProps => {
  return useContext(UpdateDataContext);
};
