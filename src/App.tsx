import React, { useEffect } from 'react';
import { MyExpensesProvider } from './hooks/MyExpense';
import Router from './routes';
import SplashScreen from 'react-native-splash-screen';
import { ThemeContextProvider } from './hooks/themes';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <MyExpensesProvider>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </MyExpensesProvider>
  );
};

export default App;
