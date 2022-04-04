import React from 'react'
import { Alert, Pressable, Text, View, StyleSheet} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "navigation/RootNavigator";
//import Moment from 'moment';

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const test = () => {

    //console.log(Moment(data.myTime.format('YYYY/MM/DD HH:MM:ss')).format("YYYY-MM-DD HH:MM:SS"))
    //console.log(Moment().format("YYYY-MM-DD HH:mm:ss"))
    Alert.alert("Touche pas a ça Jeanne");
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Tournois")}>
        <Text style={styles.text}>Tournois</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Clubs")}>
        <Text style={styles.text}>Clubs</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => test()}>
        <Text style={styles.text}>Catégorie</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    //display: 'flex',
    //flexDirection: 'row',
    //maxHeight: 100,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    marginVertical: 5,
    marginHorizontal: 5,
    width: 201,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});



//class Home extends React.Component {
//  const navigation = useNavigation();
//export default Home

/*
        <HomeButton
          label={'origin'}
          buttonStyle={{backgroundColor: '#FFFFFF'}}
          labelStyle={{color: '#202020', textAlign: 'left'}}
        />

        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />

export default class About extends React.Component {
  render (){
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

*/
