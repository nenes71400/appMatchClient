import React, { useState } from 'react';
import { Alerte, Button, SafeAreaView, TextInput, ScrollView, View, Text, StyleSheet} from 'react-native';
import api from 'api/api';

interface Props {
  club: {};
  //onPress: (name: string) => void;
}
interface PropsAdd {}

const ClubCard: React.FC<Props> = ( {club} ) => {
  return (
      <View style={styles.container}>
        <Text>{club.id}</Text>
        <Text>{club.nom}</Text>
        <Text>{club.ville}</Text>
      </View>
  );
};

const ClubCardAdd: React.FC<PropsAdd> = () => {
  const [nom, setNom] = useState("");
  const [ville, setVille] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeNomHandler = (nom: string) => {
    setNom(nom);
  };

  const onChangeVilleHandler = (ville: string) => {
    setVille(ville);
  };

  const onSubmitFormHandler = async (event) => {
    //console.log("Ajouter")
    if ( !nom.trim() ) {
      Alerte.alert("Vous devez- spécifier un Nom");
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.post("/clubs/create", {
        "nom": nom,
        "ville": ville,
        "logo": null
      });
      //console.log(response.status)
      if (response.status === 200) {
        //alert(` Vous avez ajouté : ${JSON.stringify(response.data)}`);
        //alert(`${JSON.stringify(response.data.message)}`);
        Alerte.alert(response.data.message);
        setIsLoading(false);
        setNom('');
        setVille('');
      } else {
        throw new Error("Une erreur est survenue");
      }
    } catch (error) {
      Alerte.alert("An error has occurred");
      setIsLoading(false);
    }
  };
        //<ScrollView contentContainerStyle={styles.containerScroll}>

  return (
    <SafeAreaView>
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.textInputTittle}>Nom</Text>
          <TextInput
            placeholder={nom}
            //placeholderTextColor="#ffffff"
            style={styles.input}
            value={nom}
            editable={!isLoading}
            onChangeText={onChangeNomHandler}

            //style={styles.input}
            //onChangeText={onChangeText}
            //value={text}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.textInputTittle}>Ville</Text>
          <TextInput
            placeholder={ville}
            //placeholder="Ville"
            placeholderTextColor="red"
            style={styles.input}
            value={ville}
            editable={!isLoading}
            onChangeText={onChangeVilleHandler}
          />
        </View>
        <View>
          <Button
            title="Ajouter"
            onPress={onSubmitFormHandler}
            style={styles.submitButton}
            disabled={isLoading}
          />
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};
export { ClubCard, ClubCardAdd } ;

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
