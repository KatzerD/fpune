import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import ComponenteParcial01 from './ComponenteParcial01';
import PropsParcial02 from './PropsParcial02';
import AxiosParcial03 from './AxiosParcial03';
import AsyncStorageParcial04 from './AsyncStorageParcial04';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ComponenteParcial01"
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: '#fff',
          headerTitleStyle: styles.headerTitle,
          contentStyle: styles.content,
        }}
      >
        <Stack.Screen name="ComponenteParcial01" component={ComponenteParcial01} />
        <Stack.Screen name="PropsParcial02" component={PropsParcial02} />
        <Stack.Screen name="AxiosParcial03" component={AxiosParcial03} />
        <Stack.Screen name="AsyncStorageParcial04" component={AsyncStorageParcial04} />
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
