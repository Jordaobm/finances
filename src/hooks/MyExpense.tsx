import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';

interface MyExpensesContextData {
  salary: number;
  setSalary(salary: number): void;
}

const MyExpensesContext = createContext<MyExpensesContextData>(
  {} as MyExpensesContextData,
);

const MyExpensesProvider: React.FC = ({children}) => {
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    async function loadSalary() {
      const load = await AsyncStorage.getItem('@finances:salary');
      if (load) {
        const parsed = JSON.parse(load);
        setSalary(parsed);
      }
    }
    loadSalary();
  }, []);

  useEffect(() => {
    async function setSalary() {
      await AsyncStorage.setItem('@finances:salary', JSON.stringify(salary));
    }
    setSalary();
  }, [salary]);

  console.log(salary);

  return (
    <MyExpensesContext.Provider value={{salary, setSalary}}>
      {children}
    </MyExpensesContext.Provider>
  );
};

function useMyExpenses(): MyExpensesContextData {
  const context = useContext(MyExpensesContext);
  return context;
}

export {useMyExpenses, MyExpensesProvider};
