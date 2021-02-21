import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Init from '../pages/Init';
import Home from '../pages/Home';
import { MyExpenses } from '../pages/MyExpenses';
import DetailsCategory from '../pages/MyExpenses/DetailsCategory';
import MyInitialBalance from '../pages/MyExpenses/MyInitialBalance';
import YourSpending from '../pages/MyExpenses/YourSpending';
import ListExpenses from '../pages/MyExpenses/ListExpenses';
import AddExpense from '../pages/MyExpenses/AddExpense';
import ListCategory from '../pages/MyExpenses/ListCategory';
import AddIncome from '../pages/MyExpenses/AddIncome';
import EditExpense from '../pages/MyExpenses/EditExpense';
import { clearGlobalStateAndStorage } from '../utils/clearGlobalStateAndStorage';
import EditIncome from '../pages/MyExpenses/EditIncome';
import AddCategory from '../pages/MyExpenses/AddCategory';
import { ThemeProvider } from 'styled-components';
import { light } from '../styles/themes/light';
import { dark } from '../styles/themes/dark';
import { useTheme } from '../hooks/themes';
import { StatusBar } from 'react-native';
import AccountScheduling from '../pages/AccountScheduling';
import IncomeScheduling from '../pages/AccountScheduling/IncomeScheduling';
import ListExpensesScheduling from '../pages/AccountScheduling/ListExpensesScheduling';
import ExpenseScheduling from '../pages/AccountScheduling/ExpenseScheduling';

const Router: React.FC = () => {
  const Stack = createStackNavigator();
  // clearGlobalStateAndStorage();
  const { switchState } = useTheme();

  return (
    <ThemeProvider theme={switchState ? dark : light}>
      <StatusBar backgroundColor={!switchState ? '#4ccc81' : '#1a1a1a'} />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Init" component={Init} />
          <Stack.Screen name="Home" component={Home} />

          {/* Telas de Controle de despesas */}

          <Stack.Screen name="MyExpenses" component={MyExpenses} />
          <Stack.Screen name="YourSpending" component={YourSpending} />
          <Stack.Screen name="MyInitialBalance" component={MyInitialBalance} />
          <Stack.Screen name="ListCategory" component={ListCategory} />
          <Stack.Screen name="ListExpenses" component={ListExpenses} />
          <Stack.Screen name="AddCategory" component={AddCategory} />
          <Stack.Screen name="AddExpense" component={AddExpense} />
          <Stack.Screen name="AddIncome" component={AddIncome} />
          <Stack.Screen name="EditExpense" component={EditExpense} />
          <Stack.Screen name="EditIncome" component={EditIncome} />
          <Stack.Screen name="DetailsCategory" component={DetailsCategory} />

          {/* Telas de agendamento de despesas */}

          <Stack.Screen
            name="AccountScheduling"
            component={AccountScheduling}
          />
          <Stack.Screen name="IncomeScheduling" component={IncomeScheduling} />
          <Stack.Screen
            name="ListExpensesScheduling"
            component={ListExpensesScheduling}
          />
          <Stack.Screen
            name="ExpenseScheduling"
            component={ExpenseScheduling}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Router;
