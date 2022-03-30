import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ClubsCard from '../components/ClubsCard';

export const ClubsScreen = () => {
  return (
    <View>
      <Text style={styles.screenTitle}>Liste des Clubs</Text>
      <ScrollView>
      <ClubsCard name="ASA" />
      <ClubsCard name="SCC" />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

//      <ClubsCard
//        name="ASA"
//        onPress={name => {
//            navigation.navigate('Club', {name});
//          }}
//      />
//      <ClubsCard
//        name="SCC"
//        onPress={name => {
//            navigation.navigate('Club', {name});
//          }}
//      />
