import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  IIncomeScheduling,
  IExpenseScheduling,
  IExpenseDetailPageState,
} from '../dtos/types';

interface AccountSchedulingData {
  addAccountSchedulingIncome(scheduling: IIncomeScheduling): void;
  scheduling: IIncomeScheduling[];

  addAccountSchedulingExpense(expense: IExpenseScheduling): void;
  schedulingExpenses: IExpenseScheduling[];

  expensePage: IExpenseDetailPageState;
  setExpensePage(expense: IExpenseDetailPageState): void;
}

const AccountSchedulingContext = createContext<AccountSchedulingData>(
  {} as AccountSchedulingData,
);

const AccountSchedulingProvider: React.FC = ({ children }) => {
  const [scheduling, setScheduling] = useState<IIncomeScheduling[]>([]);
  // eslint-disable-next-line prettier/prettier
  const [schedulingExpenses, setSchedulingExpenses] = useState<IExpenseScheduling[]>([]);
  const [expensePage, setExpensePage] = useState<IExpenseDetailPageState>(
    {} as IExpenseDetailPageState,
  );
  const [idNotification, setIdNotification] = useState(0);

  useEffect(() => {
    async function load() {
      const loadScheduling = await AsyncStorage.getItem('@finances:scheduling');
      if (loadScheduling) {
        const parsed = JSON.parse(loadScheduling);
        setScheduling(parsed);
      }
    }
    async function loadScheduleExpenses() {
      const loadScheduling = await AsyncStorage.getItem(
        '@finances:schedulingExpenses',
      );
      if (loadScheduling) {
        const parsed = JSON.parse(loadScheduling);
        setSchedulingExpenses(parsed);
      }
    }
    async function loadidNotification() {
      const loadScheduling = await AsyncStorage.getItem(
        '@finances:idNotification',
      );
      if (loadScheduling) {
        const parsed = JSON.parse(loadScheduling);
        setIdNotification(parsed);
      }
    }
    loadScheduleExpenses();
    loadidNotification();
    load();
  }, []);

  const addAccountSchedulingIncome = useCallback(
    (data: IIncomeScheduling) => {
      const id = idNotification + 1;
      const newAccountSchedulingIncome: IIncomeScheduling = {
        id,
        name: data.name,
        DateIncome: data.DateIncome,
        description: data.description,
      };

      setScheduling([...scheduling, newAccountSchedulingIncome]);
      setIdNotification(id);
    },
    [scheduling, idNotification],
  );

  const addAccountSchedulingExpense = useCallback(
    (data: IExpenseScheduling) => {
      const id = idNotification + 1;
      const newAccointSchedulingExpense: IExpenseScheduling = {
        id,
        color: data.color,
        icon: data.icon,
        name: data.name,
        DateExpense: data.DateExpense,
        description: data.description,
      };

      setSchedulingExpenses([
        ...schedulingExpenses,
        newAccointSchedulingExpense,
      ]);
      setIdNotification(id);
    },
    [schedulingExpenses, idNotification],
  );

  useEffect(() => {
    async function setStorageScheduling() {
      await AsyncStorage.setItem(
        '@finances:scheduling',
        JSON.stringify(scheduling),
      );
    }
    setStorageScheduling();
  }, [scheduling]);

  useEffect(() => {
    async function setStorageSchedulingExpenses() {
      await AsyncStorage.setItem(
        '@finances:schedulingExpenses',
        JSON.stringify(schedulingExpenses),
      );
    }
    setStorageSchedulingExpenses();
  }, [schedulingExpenses]);

  useEffect(() => {
    async function setStorageScheduling() {
      await AsyncStorage.setItem(
        '@finances:idNotification',
        JSON.stringify(idNotification),
      );
    }
    setStorageScheduling();
  }, [idNotification]);

  console.log(schedulingExpenses);

  return (
    <AccountSchedulingContext.Provider
      value={{
        addAccountSchedulingIncome,
        scheduling,
        addAccountSchedulingExpense,
        schedulingExpenses,
        expensePage,
        setExpensePage,
      }}
    >
      {children}
    </AccountSchedulingContext.Provider>
  );
};

function useAccountScheduling(): AccountSchedulingData {
  const context = useContext(AccountSchedulingContext);
  return context;
}

export { useAccountScheduling, AccountSchedulingProvider };
