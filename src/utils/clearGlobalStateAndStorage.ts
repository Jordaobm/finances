import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

export async function clearGlobalStateAndStorage() {
  await AsyncStorage.removeItem('@finances:salary');
  await AsyncStorage.removeItem('@finances:categories');
  await AsyncStorage.removeItem('@finances:expenses');
}
