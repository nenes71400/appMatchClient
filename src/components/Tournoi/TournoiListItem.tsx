import React from "react";
import { Text, TouchableWithoutFeedback, View, StyleSheet} from "react-native";
import { Tournoi } from 'models/tournoi'
import Moment from 'moment';

interface TournoiListItemProps {
  onPress: () => void;
  tournoi: Tournoi;
}

export const TournoiListItem: React.FunctionComponent<TournoiListItemProps> = ({ onPress, tournoi }) => {
  Moment.locale('fr');

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.viewList}>
        <View style={styles.viewListText}>
          <Text style={styles.nom}>{tournoi.nom}</Text>
          <Text style={styles.ville}>{tournoi.ville}</Text>
          <Text style={styles.date}>{Moment(tournoi.date).format('DD/MM/YYYY')}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  viewList: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    //flexDirection: 'row'
  },
  viewListText: {
    paddingHorizontal: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  nom: {
    fontWeight: 'bold',
  },
  ville: {
    color: 'grey',
    paddingLeft: 30,
  },
  date: {
    color: 'grey',
    paddingLeft: 30,
  },
});



