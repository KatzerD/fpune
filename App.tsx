
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import BasicComponents from './src/ejercicios/components/BasicComponents';
import Ejercicio1 from './src/ejercicios/components/Ejercicio1';
import TrabajoPractico01 from './src/trabajo_grupal/components/TrabajoPractico01';
import TapCounter from './src/ejercicios/components/TapCounter';
import ListaAlumnos from './src/ejercicios/components/ListaAlumnos';
import Home from './src/ejercicios/components/react-native-elements/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AvatarBasic from './src/ejercicios/components/react-native-elements/AvatarBasic';
import PropsEjemplo from './src/ejercicios/components/react-native-elements/PropsEjemplo';
import AxiosEjemplo from './src/ejercicios/components/react-native-elements/AxiosEjemplo';
import AsyncStorageEjemplo from './src/ejercicios/components/react-native-elements/AsyncStorageEjemplo';
import Router from './src/primer-parcial/Router';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Router/>
  );
}

export default App;
