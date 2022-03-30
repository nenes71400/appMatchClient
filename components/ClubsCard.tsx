import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  name: string;
  //onPress: (name: string) => void;
}

//const ClubsCard: React.FC<Props> = ({name, onPress}) => {
const ClubsCard: React.FC<Props> = ({name}) => {
  return (
    //<TouchableOpacity onPress={() => onPress(name)}>
    <TouchableOpacity>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
});

export default ClubsCard;
