import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Init from '../pages/Init';
import Home from '../pages/Home';
import {MyExpenses, YourSpending, ExpenseCategory} from '../pages/MyExpenses';
import {MyExpensesProvider} from '../hooks/MyExpense';

const Router: React.Fc = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Init" component={Init} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyExpenses" component={MyExpenses} />
        <Stack.Screen name="YourSpending" component={YourSpending} />
        <Stack.Screen name="ExpenseCategory" component={ExpenseCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
