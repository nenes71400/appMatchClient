import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "navigation/RootNavigator";

import { SafeAreaView } from "react-native-safe-area-context";
import {Pressable, View, StyleSheet, FlatList, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

import { MTournoi } from "models/tournoi";
import { TournoiListItem } from "components/Tournoi/TournoiListItem";
import api from 'api/api';

interface TournoisProps {}

export const Tournois: React.FunctionComponent<TournoisProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const [tournoisList, setTournois] = useState([]);

  const listSeparator = () => (
    <View style={styles.listSeparator} />
  );

  useEffect(() => {
    const fetchTournois = async () => {
      try {
        const response = await api.get('/tournois/read');
        setTournois(response.data);

      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchTournois();
  }, [])

  const renderListItem = ({item}: MTournoi) => {
    const onTournoiPress = () => {
      navigation.navigate("Tournoi", {id: item.id});
    };

    return (
      <TournoiListItem key={item.id} onPress={onTournoiPress} tournoi={item} />
    );
  };

  return(
    <SafeAreaView style={styles.container}>
      <Text>Liste des tournois</Text>
      <View style={styles.viewBtn}>
        <Pressable style={styles.btnNew} onPress={() => navigation.navigate("TournoiAdd")}>
          <Text style={styles.textBtn}>Ajouter</Text>
        </Pressable>
      </View>
      <FlatList
        data={tournoisList}
        renderItem={renderListItem}
        ItemSeparatorComponent={listSeparator}
      />
    </SafeAreaView>
  );
};

/*
        <Pressable style={styles.btnNew} onPress={() => fetchTournois()}>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBtn: {
  },
  btnNew: {
    alignItems: 'center',
    justifyContent: 'center',
    //paddingVertical: 12,
    //paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    marginVertical: 5,
    marginHorizontal: 5,
    //width: 201,
    height: 50,
  },
  textBtn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  listSeparator: {
  },
});

/*
  useEffect(() => {
    const fetchTournois = async () => {
      try {
        const response = await api.get('/read');
        setClubs(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchClubs();
  }, [])

  const renderListItem = ({ item }: Club) => {
    const onClubPress = () => {
      navigation.navigate("Club", {id: item.id});
    };

    return (
      <ClubListItem key={item.id} onPress={onClubPress} club={item} />
    );
  };

  const listSeparator = () => (
    <View style={styles.listSeparator} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View>
          <Pressable style={styles.button} onPress={() => navigation.navigate("ClubAdd")}>
            <Text style={styles.textButton}>Ajouter</Text>
          </Pressable>
        </View>

        <FlatList
          data={clubsList}
          renderItem={renderListItem}
          ItemSeparatorComponent={listSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  button: {
  },
  textButton: {
  },
  listSeparator: {
    backgroundColor: 'blue',
  },
  safeArea: {
  },
});

/*
export const Clubs: React.FunctionComponent<ClubsProps> = ({}) => {




  const { data, dataInfo, loading, error, refetch } = useFetch('http://192.168.0.120:5000/clubs/read');
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  //const renderListItem = ({ item }: { item: Club }) => {
  const renderListItem = ({ item }) => {
    const onClubPress = () => {
      //console.log(item.nom);
      navigation.navigate("Club", {id: item.id});
    };
    return (
      <ClubListItem key={item.id} onPress={onClubPress} club={item} />
    );
  };

  const listSeparator = () => (
    <View style={styles.listSeparator} />
  );

      //{console.log({data})}
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <FlatList
          data={data}
          renderItem={renderListItem}
          ItemSeparatorComponent={listSeparator}
        />
      </View>
    </SafeAreaView>
  );
};
*/
