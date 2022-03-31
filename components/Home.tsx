//import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View} from 'react-native';
//import HomeButton from './HomeButton';

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = ({}) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

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
