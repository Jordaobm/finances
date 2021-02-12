import React from 'react';
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

const Router: React.Fc = () => {
  const Stack = createStackNavigator();
  // clearGlobalStateAndStorage();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Init" component={Init} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyExpenses" component={MyExpenses} />
        <Stack.Screen name="YourSpending" component={YourSpending} />
        <Stack.Screen name="MyInitialBalance" component={MyInitialBalance} />
        <Stack.Screen name="ListCategory" component={ListCategory} />
        <Stack.Screen name="ListExpenses" component={ListExpenses} />
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="AddIncome" component={AddIncome} />
        <Stack.Screen name="EditExpense" component={EditExpense} />
        <Stack.Screen name="EditIncome" component={EditIncome} />
        <Stack.Screen name="DetailsCategory" component={DetailsCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
