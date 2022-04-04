//import {View, Text} from 'react-native';
import React from 'react';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RouteParams } from "navigation/RootNavigator";
import api from 'api/api';
import { useState, useEffect } from 'react';
import { TournoiCard, TournoiCardAdd, TournoiCardAddCategorie } from 'components/Tournoi/TournoiCard'
import { MTournoi } from 'models/tournoi';

//-----------------------------------------------------------------------------
interface TournoiProps {}
export const Tournoi: React.FunctionComponent<TournoiProps> = ({}) => {
  const route = useRoute<RouteProp<RouteParams>>();
  const [tournoi, setTournoi] = useState({})

  useEffect(() => {
    const fetchTournoi = async () => {
      try {
        const response = await api.get(`/tournois/read/${route.params?.id}`);
        setTournoi(response.data);
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

    fetchTournoi();
  }, [])

  //console.log({tournoi});

  return (
    <TournoiCard tournoi={tournoi}> </TournoiCard>
  );
};

//-----------------------------------------------------------------------------
interface TournoiPropsAdd {}
export const TournoiAdd: React.FunctionComponent<TournoiPropsAdd> = ({}) => {
  return (
    <TournoiCardAdd > </TournoiCardAdd>
  );
};

//-----------------------------------------------------------------------------
interface TournoiPropsAddCategorie {
  //tournoi: MTournoi,
}
export const TournoiAddCategorie: React.FunctionComponent<TournoiPropsAddCategorie> = () => {
  const route = useRoute<RouteProp<RouteParams>>();
  //${route.params?.id}
  //console.log({tournoi})
  //console.log(route.params?.tournoi)
  //console.log(${route.params?.tournoi})
  return (
    <TournoiCardAddCategorie tournoi={route.params?.tournoi}></TournoiCardAddCategorie>
  );
};
