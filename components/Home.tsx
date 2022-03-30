//import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, Button, Alert} from 'react-native';
import HomeButton from './HomeButton';

//interface HomeProps {}

//export const Home: React.FunctionComponent<HomeProps> = ({}) => {
export default class Home extends React.Component {
  render (){
//  const navigation = useNavigation();
    return (
      <View>
        <Text>Home</Text>
        <HomeButton
          label={'origin'}
          buttonStyle={{backgroundColor; '#FFFFFF'}}
          labelStyle={{color: '#202020', textAlign: 'left'}}
        />
      </View>
    )
  }
}

//        <Button
//          title="Press me"
//          onPress={() => Alert.alert('Simple Button pressed')}
//        />
//        <Button
//          title="Press me"
//          onPress={() => Alert.alert('Simple Button pressed')}
//        />
//
//export default class About extends React.Component {
//  render (){
//    return (
//      <View>
//        <Text>Home</Text>
//      </View>
//    )
//  }
//}
