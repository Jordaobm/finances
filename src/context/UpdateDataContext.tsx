import React, { useEffect, useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import { getCategoriesByDB } from "../database/functions";
import { getCategories } from "../services/realm";
import { Category } from "../types";

interface UpdateDataContextProps {
  updateCategory: Category;
  setUpdateCategory: (category: Category) => void;

  categories: Category[];
  setCategories: (categories: Category[]) => void;
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

  useEffect(async () => {
    setCategories(await getCategoriesByDB().then((data) => data));
  }, []);

  return (
    <UpdateDataContext.Provider
      value={{ updateCategory, setUpdateCategory, categories, setCategories }}
    >
      {children}
    </UpdateDataContext.Provider>
  );
};

export const useUpdateDataContext = (): UpdateDataContextProps => {
  return useContext(UpdateDataContext);
};
