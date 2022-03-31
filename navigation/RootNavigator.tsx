import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { About } from '../components/About';
import { Home } from '../components/Home';
import { Clubs } from '../screens/Clubs';
import { Club } from '../screens/Club';


export type RouteParams = {
  Home: undefined;
  About: undefined;
  Clubs: undefined;
  Club: {id: string};
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Clubs" component={Clubs} />
        <Stack.Screen name="Club" component={Club} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
