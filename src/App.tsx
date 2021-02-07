import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { MyExpensesProvider } from './hooks/MyExpense';
import Router from './routes';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <MyExpensesProvider>
      <StatusBar backgroundColor="#4ad07e" />
      <Router />
    </MyExpensesProvider>
  );
};

export default App;
