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
  IIncome,
} from '../dtos/types';

interface MyExpensesContextData {
  first: boolean;
  setFirst(first: boolean): void;

  initialBalance: number;
  setInitialBalance(initialBalance: number): void;

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

  setEditIncome(income: IIncome): void;
  deleteIncome(income: IIncome): void;

  setDetailsCategoryState(category: IExpenseCategory): void;
  detailsCategoryState: IExpenseCategory;

  deleteCategory(category: IExpenseCategory): void;
}

const MyExpensesContext = createContext<MyExpensesContextData>(
  {} as MyExpensesContextData,
);

const MyExpensesProvider: React.FC = ({ children }) => {
  const [first, setFirst] = useState(true);
  //DECLARAÇÃO DE FUNÇÕES E FUNCIONALIDADES

  const [initialBalance, setInitialBalance] = useState(0);

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
    const available = initialBalance + sumIncomes - sumExpense;

    return available;
  }, [expenses, initialBalance, incomes]);

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

  const setEditIncome = useCallback(
    (income: IIncome) => {
      const filterIncomes = incomes.filter(
        (incomeFilter) => incomeFilter.id !== income.id,
      );
      filterIncomes.push(income);
      setIncomes(filterIncomes);
    },
    [incomes],
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

  const deleteIncome = useCallback(
    (income: IIncome) => {
      setIncomes(
        incomes.filter((incomeFilter) => incomeFilter.id !== income.id),
      );
    },
    [incomes],
  );

  const deleteCategory = useCallback(
    (category: IExpenseCategory) => {
      const filterExpenses = expenses.filter(
        (expense) => expense.idExpenseCategory !== category.id,
      );
      const filterCategory = categories.filter(
        (filterCategory) => filterCategory.id !== category.id,
      );
      setExpenses(filterExpenses);

      setCategories(filterCategory);
    },
    [expenses, categories],
  );

  const [
    detailsCategoryState,
    setDetailsCategoryState,
  ] = useState<IExpenseCategory>({} as IExpenseCategory);

  // BUSCANDO INFORMAÇÕES NO ASYNCSTORAGE

  useEffect(() => {
    async function loadFirst() {
      const load = await AsyncStorage.getItem('@finances:first');
      if (load) {
        const parsed = JSON.parse(load);
        setFirst(parsed);
      }
    }

    async function loadinitialBalance() {
      const load = await AsyncStorage.getItem('@finances:initialBalance');
      if (load) {
        const parsed = JSON.parse(load);
        setInitialBalance(parsed);
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
    loadFirst();
    loadinitialBalance();
    loadCategory();
    loadExpenses();
    loadIncome();
  }, []);

  //GUARDANDO NOVAS INFORMAÇÕES NO ASYNCSTORAGE

  useEffect(() => {
    async function setFirstStorage() {
      await AsyncStorage.setItem('@finances:first', JSON.stringify(first));
    }
    setFirstStorage();
  }, [first]);

  useEffect(() => {
    async function setinitialBalance() {
      await AsyncStorage.setItem(
        '@finances:initialBalance',
        JSON.stringify(initialBalance),
      );
    }
    setinitialBalance();
  }, [initialBalance]);

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
    async function setExpensesStorage() {
      await AsyncStorage.setItem(
        '@finances:expenses',
        JSON.stringify(expenses),
      );
    }

    setExpensesStorage();
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
        first,
        setFirst,
        initialBalance,
        setInitialBalance,
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
        deleteIncome,
        setEditIncome,
        detailsCategoryState,
        setDetailsCategoryState,
        deleteCategory,
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
