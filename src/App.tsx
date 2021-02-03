import React from 'react';
import {StatusBar} from 'react-native';
import Router from './routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#4ad07e" />
      <Router />
    </>
  );
};

export default App;
