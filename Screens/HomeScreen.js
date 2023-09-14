import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { auth, firebase } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
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

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
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
      <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
