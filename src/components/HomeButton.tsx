import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface IProps {
  label: string;
  buttonStyle?: any;
  labelStyle?: any;
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#336699',
  },

  icon: {
    width: 16,
    height: 16,
  },

  label: {
    color: '#F8F8F8',
    textAlign: 'center',
  },
});

//const HomeButton: React.FC<IProps> = (props): JSX.Element => (
const HomeButton: React.FC<IProps> = (props) => {
  <TouchableHighlight>
    <View style={[styles.button, props.buttonStyle]}>
      <Text style={[styles.label, props.labelStyle]}>
        {props.label}
      </Text>
    </View>
  </TouchableHighlight>
};


export default HomeButton;

//      <Image style={styles.icon} source={require('./assets/someCoolIcon.png')} />
