import React from "react";
import { Text, TouchableWithoutFeedback, View, StyleSheet} from "react-native";

export type Club = {
  id: string;
  nom: string;
  ville: string;
  //logo: string;
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

/*
          <Button style={styles.btnSupprime}>Supprimer</Button>
        <Image
          source={{uri: ('../../assets/images/clubs/2.png')}}
          style={styles.tinyLogo}
          >
        </Image>
*/

const styles = StyleSheet.create({
  viewListClub: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    //flexDirection: 'row'
  },
  tinyLogo: {

  },
  ligne: {
  },
  viewListClubText: {
    paddingHorizontal: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  nomClub: {
    fontWeight: 'bold',
  },
  villeClub: {
    color: 'grey',
    paddingLeft: 30,
  },
  btnSupprime: {
    backgroundColor: 'red',
    color: '#FFFFFF',
  },
  textBtnSupprime: {
    color: '#FFFFFF',
  },
});



