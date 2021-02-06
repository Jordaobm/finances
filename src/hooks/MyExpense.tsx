import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { exp } from 'react-native-reanimated';
import {
  IExpense,
  IExpenseCategory,
  IExpenseDetailPageState,
  IIncome,
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

  incomes: IIncome[];
  setIncomes(incomes: IIncome[]): void;

  editExpenseState: IExpense;
  setEditExpenseState(expense: IExpense): void;

  setEditExpense(expense: IExpense): void;
  deleteExpense(expense: IExpense): void;

  editIncomeState: IIncome;
  setEditIncomeState(income: IIncome): void;
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

  const [incomes, setIncomes] = useState<IIncome[]>([]);

  const [editExpenseState, setEditExpenseState] = useState<IExpense>(
    {} as IExpense,
  );
  const [editIncomeState, setEditIncomeState] = useState<IIncome>(
    {} as IIncome,
  );

  const balanceAvailable = useCallback(() => {
    let sumExpense = 0;
    let sumIncomes = 0;
    expenses.map((expense) => {
      sumExpense = sumExpense + Number(expense.ValueExpense);
    });
    incomes.map((income) => {
      sumIncomes = sumIncomes + Number(income.ValueIncome);
    });
    const available = salary + sumIncomes - sumExpense;

    return available;
  }, [expenses, salary, incomes]);

  const setEditExpense = useCallback(
    (expense: IExpense) => {
      const filterExpenses = expenses.filter(
        (filter) => filter.id !== expense.id,
      );
      filterExpenses.push(expense);
      setExpenses(filterExpenses);
    },
    [expenses],
  );

  const deleteExpense = useCallback(
    (expense: IExpense) => {
      const filterAndDeleteExpense = expenses.filter(
        (filter) => filter.id !== expense.id,
      );

      const find = expenses.filter(
        (filter) => filter.idExpenseCategory === expense.idExpenseCategory,
      );

      console.log(find.length);

      if (find.length === 1) {
        const filterAndDeleteCategory = categories.filter(
          (filter) => filter.id !== expense.idExpenseCategory,
        );
        setCategories(filterAndDeleteCategory);
      }
      setExpenses(filterAndDeleteExpense);
    },
    [expenses, categories],
  );

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

    async function loadIncome() {
      const load = await AsyncStorage.getItem('@finances:incomes');
      if (load) {
        const parsed = JSON.parse(load);
        setIncomes(parsed);
      }
    }

    loadSalary();
    loadCategory();
    loadExpenses();
    loadIncome();
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

  useEffect(() => {
    async function setIncomeState() {
      await AsyncStorage.setItem('@finances:incomes', JSON.stringify(incomes));
    }

    setIncomeState();
  }, [incomes]);

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
        incomes,
        setIncomes,
        editExpenseState,
        setEditExpenseState,
        editIncomeState,
        setEditIncomeState,
        setEditExpense,
        deleteExpense,
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
