import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { About } from 'screens/About';
import { Home } from 'screens/Home';
import { Clubs } from 'screens/Club/Clubs';
import { Club, ClubAdd } from 'screens/Club/Club';
import { Tournois } from 'screens/Tournoi/Tournois';
import { Tournoi, TournoiAdd, TournoiAddCategorie } from 'screens/Tournoi/Tournoi';
import { MTournoi } from 'models/tournoi';


export type RouteParams = {
  Home: undefined;
  Clubs: undefined;
  Club: {id: string};
  ClubAdd: undefined;
  Tournois: undefined;
  Tournoi: {id: string};
  TournoiAdd: undefined;
  TournoiAddCategorie: {tournoi: MTournoi};
  About: undefined;
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName="ClubAdd"
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="Tournois" component={Tournois}
          options={{ title: 'Liste des Tournois', }}
        />
        <Stack.Screen name="Tournoi" component={Tournoi}
          options={{ title: 'Tournoi', }}
        />
        <Stack.Screen name="TournoiAdd" component={TournoiAdd}
          options={{title: 'Nouveau Tournoi', }}
        />
        <Stack.Screen name="TournoiAddCategorie" component={TournoiAddCategorie}
          options={{title: 'Catégorie engagées', }}
        />
        <Stack.Screen
          name="Clubs"
          component={Clubs}
          options={{
            title: 'Liste des Clubs',
          }}
        />
        <Stack.Screen name="Club" component={Club} />
        <Stack.Screen
          name="ClubAdd"
          component={ClubAdd}
          options={{
            title: 'Nouveau Clubs',
          }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Awesome app',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator<RouteParams>();
export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Clubs" component={Clubs} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
