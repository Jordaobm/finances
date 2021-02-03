import React from 'react';
import {StatusBar} from 'react-native';
import {MyExpensesProvider} from './hooks/MyExpense';
import Router from './routes';

const App: React.FC = () => {
  return (
    <MyExpensesProvider>
      <StatusBar backgroundColor="#4ad07e" />
      <Router />
    </MyExpensesProvider>
  );
};

export default App;
