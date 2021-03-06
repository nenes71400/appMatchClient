import { NavigationContainer } from '@react-navigation/native';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
//import { StyleSheet, Text, View, Image } from 'react-native';
//import { RootNavigator } from './navigation/RootNavigator';
import { RootNavigator } from './src/navigation/RootNavigator';

//export class App extends Component {

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
};

/*
      <Tabs/>
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="auto" />
      <Tabs/>
    </NavigationContainer>
  )
};
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', //#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



/*
  return (
    <View style={styles.container} >
    <Text> App </Text>
    </View>
  )
  constructor(){
    super();
      api.get('/').then(res => {
          console.log(res.data)
      })
  }
  return <ClubsScreen />

  headerStyle: {
    marginBottom: 24,
    fontSize: 22,
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
  },

});

      <Text
        style={[styles.headerStyle, styles.red]}
        >
      appTournoi!
      </Text>
      <Image
        style={{ width: 200, height: 400}}
        source={{
          uri: "http://www.rugby-bourgogne.com/fichiers/2014/10/100_7454.jpg"
          }}
      />

*/
