import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, TextInput, ScrollView, View, Text, StyleSheet} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "navigation/RootNavigator";

//import DatePicker from 'react-native-date-picker'
//import DatePicker from '@react-native-community/datetimepicker'

//import api from 'api/api';
import { MTournoi } from 'models/tournoi'
import Moment from 'moment';


//-----------------------------------------------------------------------------
interface PropsAdd {}
export const TournoiCardAdd: React.FC<PropsAdd> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  Moment.locale('fr');
  //const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    id: "",
    nom: "",
    date: `${Moment().format("YYYY-MM-DD HH:mm:ss")}`,
    ville: "Autun"
  };

  var [tournoi, setTournoi] = useState<MTournoi>(initialState);

  const onClickNext = () => {
    if ( !tournoi.nom.trim() ) {
      Alert.alert("Vous devez- spécifier un Nom");
      return;
    }

    /*
    setIsLoading(true);

    console.log("XXXXXXXXXXXXXXXXXXXX")
    console.log("tournoi")
    console.log(tournoi)
    */
    navigation.navigate( "TournoiAddCategorie", {tournoi: tournoi});
  }
//<ScrollView contentContainerStyle={styles.containerScroll}>

  return (
    <SafeAreaView>
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.textInputTittle}>Nom</Text>
          <TextInput
            key="nom"
            placeholder={tournoi.nom}
            //placeholderTextColor="#ffffff"
            style={styles.input}
            value={tournoi.nom}
            //editable={!isLoading}
            onChangeText={e => {setTournoi({ ...tournoi, nom: e});}}
            //style={styles.input}
            //onChangeText={onChangeText}
            //value={text}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.textInputTittle}>Ville</Text>
          <TextInput
            key="ville"
            placeholder={tournoi.ville}
            style={styles.input}
            value={tournoi.ville}
            //editable={!isLoading}
            onChangeText={e => {setTournoi({ ...tournoi, ville: e});}}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.textInputTittle}>Date</Text>
        </View>
        <View>
          <Button
            title="Suivant"
            onPress={onClickNext}
            style={styles.submitButton}
            //disabled={isLoading}
          />
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

//-----------------------------------------------------------------------------
interface Props {
  tournoi: MTournoi;
  //onPress: (name: string) => void;
}

export const TournoiCard: React.FC<Props> = ( {tournoi} ) => {
  return (
      <View style={styles.container}>
        <Text>{tournoi.id}</Text>
        <Text>{tournoi.nom}</Text>
      </View>
  );
};

//-----------------------------------------------------------------------------
interface PropsAddCategorie {
  tournoi: MTournoi;
}
export const TournoiCardAddCategorie: React.FC<PropsAddCategorie> = ( {tournoi} ) => {

  const onClickNext = () => {
    console.log("NEXT")
  }

  return (
      <View style={styles.container}>
        <Text>{tournoi.nom}</Text>
        <View>
          <Button
            title="Suivant"
            onPress={onClickNext}
            style={styles.submitButton}
            //disabled={isLoading}
          />
        </View>
      </View>
  );
};

/*
        {console.log({tournoi})}
*/

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
  container: {
    flex: 1,
    //marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  wrapper: {
    marginBottom: 10,
  },
  textInputTittle: {
    fontWeight: 'bold',
  },
  date: {
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    minWidth: 200,
    textAlignVertical: "center",
    paddingLeft: 10,
    borderRadius: 20,
    //color: "#ffffff",
    color: "#000000",
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
  },
});


          /*
          <TextInput
            placeholder={date}
            style={styles.input}
            value={date}
            editable={!isLoading}
            onChangeText={onChangeDateHandler}
          />
          */

        /*
          <Button title="Open" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            mode='date'
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
            confirmText="Valider"
          />
          <DatePicker
            style={styles.date}
            date={date}
            mode="date"
            placeholder="Choisir un date"
            format="DD-MM-YYYY"
            //showIcon = {false}
            customStyles={{
                     dateInput:{
                     borderWidth: 0,
                     paddingRight: 25,
            },
                dateText: {
                    fontSize: 14,
                    color: 'black'
               }
            }}
            confirmBtnText="Valider"
            cancelBtnText="Annuler"
            //useNativeDriver={false}
            onDateChange={onChangeDateHandler}
          />
        */

/*
    <View>
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#ffffff"
            style={styles.input}
            //value={fullName}
            value="Value"
            //editable={!isLoading}
            editable={true}
            //onChangeText={onChangeNameHandler}
          />
        </View>
      </ScrollView>
    </View>

*/
/*
  const onSubmitFormHandler = async (event) => {
    //console.log("Ajouter")
    if ( !nom.trim() ) {
      Alert.alert("Vous devez- spécifier un Nom");
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.post("/tournois/create", {
        "nom": nom,
        "date": date,
        "ville": ville,
      });
      //console.log(response.status)
      if (response.status === 200) {
        //alert(` Vous avez ajouté : ${JSON.stringify(response.data)}`);
        //alert(`${JSON.stringify(response.data.message)}`);
        //console.log(response);
        //console.log(response.data);
        //console.log(response.data.id);
        Alert.alert(response.data.message);
        setIsLoading(false);
        setNom('');
      } else {
        throw new Error("Une erreur est survenue");
      }
    } catch (error) {
      Alert.alert("An error has occurred");
      setIsLoading(false);
    }
  };
*/
