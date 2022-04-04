//import {View, Text} from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from "@react-navigation/native";
import { RouteParams } from "navigation/RootNavigator";
import api from 'api/api';
import { useState, useEffect } from 'react';
import { ClubCard, ClubCardAdd } from 'components/Club/ClubCard';

interface ClubProps {}

const Club: React.FunctionComponent<ClubProps> = ({}) => {
  const route = useRoute<RouteProp<RouteParams>>();
  const [club, setClub] = useState({})

  useEffect(() => {
    const fetchClub = async () => {
      try {
        const response = await api.get(`/clubs/read/${route.params?.id}`);
        setClub(response.data);
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

  return (
    <ClubCard club={club}> </ClubCard>
  );
};

export { Club };

const ClubAdd: React.FunctionComponent<ClubProps> = ({}) => {
  return (
    <ClubCardAdd > </ClubCardAdd>
  );
};

export { ClubAdd };
