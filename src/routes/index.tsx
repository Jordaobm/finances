import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Init from '../pages/Init';
import Home from '../pages/Home';
import {
  MyExpenses,
  YourSpending,
  ExpenseCategory,
  AddExpense,
  YourSalary,
  ExpenseDetail,
  AddIncome,
  EditExpense,
  EditIncome,
} from '../pages/MyExpenses';
import { clearGlobalStateAndStorage } from '../utils/clearGlobalStateAndStorage';

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
        <Stack.Screen name="YourSalary" component={YourSalary} />
        <Stack.Screen name="ExpenseCategory" component={ExpenseCategory} />
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="ExpenseDetail" component={ExpenseDetail} />
        <Stack.Screen name="AddIncome" component={AddIncome} />
        <Stack.Screen name="EditExpense" component={EditExpense} />
        <Stack.Screen name="EditIncome" component={EditIncome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
