import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import {Pressable, View, StyleSheet, FlatList, Text} from 'react-native';
import React, { useState, useEffect } from 'react';

import { RouteParams } from "navigation/RootNavigator";
import { ClubListItem, Club } from "components/Club/ClubListItem";
import api from 'api/api';

interface ClubsProps {}

export const Clubs: React.FunctionComponent<ClubsProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const [clubsList, setClubs] = useState([])

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await api.get('/clubs/read');
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
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
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
