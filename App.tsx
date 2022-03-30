import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
//import { StyleSheet, Text, View, Image } from 'react-native';
import { RootNavigator } from './navigation/RootNavigator';

//import { ClubsScreen } from './screens/Clubs'


export default function App() {
//  return <ClubsScreen />
  return (
    //<View style={styles.container} >
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
//  headerStyle: {
//    marginBottom: 24,
//    fontSize: 22,
//    fontWeight: 'bold',
//  },
//  red: {
//    color: 'red',
//  },
//
});

//      <Text
//        style={[styles.headerStyle, styles.red]}
//        >
//      appTournoi!
//      </Text>
//      <Image
//        style={{ width: 200, height: 400}}
//        source={{
//          uri: "http://www.rugby-bourgogne.com/fichiers/2014/10/100_7454.jpg"
//          }}
//      />
//
