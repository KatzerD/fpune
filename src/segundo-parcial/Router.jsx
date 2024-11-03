import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './Home';
import Inventario from './Inventario';
import Calendario from './Calendario';
import Monitor_Clima from './Monitor_Clima';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Inicio' }} 
        />
        <Stack.Screen 
          name="Inventario" 
          component={Inventario} 
          options={{ title: 'Inventario de Granos' }} 
        />
        <Stack.Screen 
          name="Calendario" 
          component={Calendario} 
          options={{ title: 'Calendario de Siembra' }} 
        />
        <Stack.Screen 
          name="Monitor_Clima" 
          component={Monitor_Clima} 
          options={{ title: 'Monitoreo del Clima' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5b458f',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    backgroundColor: '#f9f9f9',
  },
});

export default Router;
