import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';

//import ClubsCard from '../components/ClubsCard';
//import axios from "axios";
//import useFetch from '../hooks/useFetch'
import { RouteParams } from "../navigation/RootNavigator";
import {ClubListItem } from "../components/ClubListItem/ClubListItem";
import api from '../api/club';

interface ClubsProps {}

export const Clubs: React.FunctionComponent<ClubsProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const [clubs, setClubs] = useState([])

  useEffect(() => {
    const fetchClubs = async () => {
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

  const renderListItem = ({ item }) => {
    const onClubPress = () => {
      console.log(item.nom);
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
        <FlatList
          data={clubs}
          renderItem={renderListItem}
          ItemSeparatorComponent={listSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

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

const styles = StyleSheet.create({
   container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  listSeparator: {
    backgroundColor: 'blue',
  },
  safeArea: {
  },
});





//
//
//
///*
//
///*
//  state = {
//      post: {}
//  }
//
//  componentDidMount(){
//  }
//*/
////  render (){
///*
//  useEffect(() => {
//    fetch(`http://192.168.0.120:5000/clubs/read`)
//      .then((response) => {
//        return response.json()
//      })
//      .then((result) => {
//        console.log(result)
//        //this.setState({post: result})
//      })
//  })
//  useEffect(() => {
//    axios.get("http://192.168.0.120:5000/clubs/read")
//      .then((response) => console.log(response.data));
//  }, []);
//*/
//
///*
//  //const renderItem = ({item} ) => {
//  const renderItem = ({item}: any) => {
//    return (
//    //<TouchableHighlight
//      //key={item.id}
//      <View style={{ backgroundColor: 'red' }}>
//        <Text>{item.nom}</Text>
//      </View>
//    //</TouchableHighlight>
//    )
//  }
//*/
//  const Item = ({ item, onPress, backgroundColor, textColor }) => (
//    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//      <Text style={[styles.title, textColor]}>{item.nom}</Text>
//    </TouchableOpacity>
//  );
///*
//  const Item = ({ nom }: any) => (
//    <View style={styles.item}>
//      <Text style={styles.title}>{nom}</Text>
//    </View>
//  );
//
//  const renderItem = ({ item }: any) => (
//    <Item nom={item.nom} />
//  );
//*/
//  const [selectedId, setSelectedId] = useState(null);
//
//  const renderItem = ({ item }: any) => {
//    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//    const color = item.id === selectedId ? 'white' : 'black';
//    return (
//      <Item
//        item={item}
//        onPress={() => setSelectedId(item.id)}
//        backgroundColor={{ backgroundColor }}
//        textColor={{ color }}
//      />
//    );
//  };
//
//  return (
//  <SafeAreaView style={styles.container}>
//    <FlatList
//      data={data}
//      renderItem={renderItem}
//      //keyExtractor={item => item.id}
//    />
//  </SafeAreaView>
//
//  )
//};
//
//
//
////      <ClubsCard
////        name="ASA"
////        onPress={name => {
////            navigation.navigate('Club', {name});
////          }}
////      />
////      <ClubsCard
////        name="SCC"
////        onPress={name => {
////            navigation.navigate('Club', {name});
////          }}
////      />
