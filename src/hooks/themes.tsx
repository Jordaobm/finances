import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextProps {
  switchState: boolean;
  setSwitchState(value: boolean): void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [switchState, setSwitchState] = useState(false);

  useEffect(() => {
    async function load() {
      const loadTheme = await AsyncStorage.getItem('@finances:switchState');
      if (loadTheme) {
        const parsed = JSON.parse(loadTheme);
        setSwitchState(parsed);
      }
    }
    load();
  }, []);

  useEffect(() => {
    async function setTheme() {
      AsyncStorage.setItem(
        '@finances:switchState',
        JSON.stringify(switchState),
      );
    }
    setTheme();
  }, [switchState]);

  return (
    <ThemeContext.Provider
      value={{
        switchState,
        setSwitchState,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeContextProvider, useTheme };
