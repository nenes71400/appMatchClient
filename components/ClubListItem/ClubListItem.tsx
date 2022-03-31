import React from "react";
import { Text, TouchableWithoutFeedback, View, StyleSheet} from "react-native";

//import { Card } from "~/components/Card";

export type Club = {
  id: string;
  //photo: string;
  nom: string;
  ville: string;
};

interface ClubListItemProps {
  onPress: () => void;
  club: Club;
}

export const ClubListItem: React.FunctionComponent<ClubListItemProps> = ({ onPress, club }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.viewListClub}>
        <View style={styles.viewListClubText}>
          <Text style={styles.nomClub}>{club.nom}</Text>
          <Text style={styles.villeClub}>{club.ville}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
   viewListClub: {
  },
   viewListClubText: {
  },
   nomClub: {
     fontWeight: 'bold',
  },
   villeClub: {
     color: 'red',
  },
});



