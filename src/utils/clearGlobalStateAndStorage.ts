import AsyncStorage from '@react-native-async-storage/async-storage';

export async function clearGlobalStateAndStorage() {
  await AsyncStorage.removeItem('@finances:initialBalance');
  await AsyncStorage.removeItem('@finances:payday');
  await AsyncStorage.removeItem('@finances:categories');
  await AsyncStorage.removeItem('@finances:expenses');
  await AsyncStorage.removeItem('@finances:incomes');
  await AsyncStorage.removeItem('@finances:balanceAvailableState');
}
