import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const AddABookClub = () => {
  const newBookclub = firebase.firestore().collection("bookclubs");
  const [bookclub, setBookclub] = useState();

  const addClub = () => {
    const data = { name: bookclub };
    newBookclub
      .add(data)
      .then(() => {
        setBookclub("");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}> Get Booked 📚</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
          placeholder="Add a bookclub"
          autoCapitalize="none"
          onChangeText={(name) => {
            setBookclub(name);
          }}
          value={bookclub}
          multiline={true}
        />
        <TouchableOpacity style={styles.button} onPress={addClub}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddABookClub;

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    marginBottom: 50,
  },
  container: {
    backgroundColor: "blanchedalmond",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#e3e3e3",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#2a6b3b",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop:10
  },
  buttonOutline: {
    backgroundColor: "#e3e3e3",
    marginTop: 5,
    borderColor: "#2a6b3b",
    borderWidth: 2,
  },
  buttonText: {
    color: "#e3e3e3",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#2a6b3b",
    fontWeight: "700",
    fontSize: 16,
  },
});
