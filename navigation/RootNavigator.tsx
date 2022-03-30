import React from 'react'
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import About from '../components/About';
import Home from '../components/Home';

export type RouteParams = {
  Home: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
