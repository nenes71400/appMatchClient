import {View, Text} from 'react-native';
import React from 'react';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RouteParams } from "../navigation/RootNavigator";
//import useFetch from '../hooks/useFetch'
import api from '../api/club';
import { useState, useEffect } from 'react';

interface ClubProps {}

export const Club: React.FunctionComponent<ClubProps> = ({}) => {
  const route = useRoute<RouteProp<RouteParams>>();
  //const { data, dataInfo, loading, error, refetch } = useFetch(`http://192.168.0.120:5000/clubs/read/${route.params?.id}`);

  const [club, setClub] = useState({})

  useEffect(() => {
    const fetchClub = async () => {
      try {
        const response = await api.get(`/read/${route.params?.id}`);
        //console.log(response.data.pop());
        setClub(response.data.pop());
        //setClub(response.data);
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

    fetchClub();
  }, [])

  //console.log({club});

  //const c = club.pop();
  //console.log(c);

  return (
      <View>
        <Text>Fiche CLUB</Text>
        <Text>{club.ville}</Text>
      </View>
  );
};

