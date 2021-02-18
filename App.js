import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { logo } from "./assets/favicon.png";

export default function App() {
  const [myName, setMyName] = useState("Raja");
  const [person, setPerson] = useState({ name: "Hajra", age: 100 });
  const updateName = () => {
    setMyName("Sabiq");
    setPerson({ name: "Bajwa", age: 50 });
  };

  return (
    <View style={styles.container}>
      <Text>Enter your name</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="eg Raja Sabiq"
        onChangeText={(e) => setMyName(e)}
      />
      <Text>My Name is {myName}</Text>
      <Text>
        My Name is {person.name} and age is {person.age}
      </Text>
      <View style={styles.btnContainer}>
        <Button title="Click me" onPress={updateName} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    marginTop: 10,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#000",
    height: 35,
    padding: 8,
  },
});
