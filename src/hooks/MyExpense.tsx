import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  IExpense,
  IExpenseCategory,
  IExpenseDetailPageState,
} from '../dtos/types';

interface MyExpensesContextData {
  salary: number;
  setSalary(salary: number): void;

  addCategoryInExpenses(category: IExpenseCategory): void;
  categories: IExpenseCategory[];

  expenseDetailPageState: IExpenseDetailPageState;
  setExpenseDetailPageState(expenseDetaill: IExpenseDetailPageState): void;

  category_id: number;
  setCategory_id(category_id: number): void;

  expenses: IExpense[];
  setExpenses(expenses: IExpense[]): void;

  balanceAvailable(): number;
}

const MyExpensesContext = createContext<MyExpensesContextData>(
  {} as MyExpensesContextData,
);

const MyExpensesProvider: React.FC = ({ children }) => {
  //DECLARAÇÃO DE FUNÇÕES E FUNCIONALIDADES

  const [salary, setSalary] = useState(0);

  const [
    expenseDetailPageState,
    setExpenseDetailPageState,
  ] = useState<IExpenseDetailPageState>({} as IExpenseDetailPageState);

  const [expenses, setExpenses] = useState<IExpense[]>([]);

  const [categories, setCategories] = useState<IExpenseCategory[]>([]);

  const addCategoryInExpenses = useCallback(
    (category: IExpenseCategory) => {
      const alreadyExistCategory = categories.find(
        (findCategory) => findCategory.name === category.name,
      );

      if (alreadyExistCategory) {
        return;
      }
      setCategories([...categories, category]);
    },
    [categories],
  );

  const [category_id, setCategory_id] = useState(0);

  const balanceAvailable = useCallback(() => {
    let sum = 0;
    expenses.map((expense) => {
      sum = sum + Number(expense.ValueExpense);
    });
    const available = salary - sum;
    return available;
  }, [expenses, salary]);
  // BUSCANDO INFORMAÇÕES NO ASYNCSTORAGE

  useEffect(() => {
    async function loadSalary() {
      const load = await AsyncStorage.getItem('@finances:salary');
      if (load) {
        const parsed = JSON.parse(load);
        setSalary(parsed);
      }
    }

    async function loadCategory() {
      const load = await AsyncStorage.getItem('@finances:categories');
      if (load) {
        const parsed = JSON.parse(load);
        setCategories(parsed);
      }
    }

    async function loadExpenses() {
      const load = await AsyncStorage.getItem('@finances:expenses');
      if (load) {
        const parsed = JSON.parse(load);
        setExpenses(parsed);
      }
    }

    loadSalary();
    loadCategory();
    loadExpenses();
  }, []);

  //GUARDANDO NOVAS INFORMAÇÕES NO ASYNCSTORAGE

  useEffect(() => {
    async function setSalary() {
      await AsyncStorage.setItem('@finances:salary', JSON.stringify(salary));
    }
    setSalary();
  }, [salary]);

  useEffect(() => {
    async function setCategory() {
      await AsyncStorage.setItem(
        '@finances:categories',
        JSON.stringify(categories),
      );
    }
    setCategory();
  }, [categories]);

  useEffect(() => {
    async function setExpenses() {
      await AsyncStorage.setItem(
        '@finances:expenses',
        JSON.stringify(expenses),
      );
    }

    setExpenses();
  }, [expenses]);

  return (
    <MyExpensesContext.Provider
      value={{
        salary,
        setSalary,
        addCategoryInExpenses,
        categories,
        expenseDetailPageState,
        setExpenseDetailPageState,
        expenses,
        setExpenses,
        category_id,
        setCategory_id,
        balanceAvailable,
      }}
    >
      {children}
    </MyExpensesContext.Provider>
  );
};

function useMyExpenses(): MyExpensesContextData {
  const context = useContext(MyExpensesContext);
  return context;
}

export { useMyExpenses, MyExpensesProvider };
