import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';
import MemoryScreen from './src/anısayfası';

const Stack = createNativeStackNavigator()
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Ana Sayfa'
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Detaylar'
          component={DetailScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Memory'
          component={MemoryScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App