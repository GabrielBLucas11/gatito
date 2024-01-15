import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native'

import Routes from './src/routes';
import TelaPadrao from './src/components/TelaPadrao';

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {
  console.tron.log('Alura')
  return (
    <TelaPadrao>
      <Routes />
    </TelaPadrao>
  );
}
