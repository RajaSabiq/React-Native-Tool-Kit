import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [myName, setMyName] = useState([
    { name: "Sabiq", key: "1" },
    { name: "Kumail", key: "2" },
    { name: "Zaka", key: "3" },
    { name: "Umer", key: "4" },
    { name: "Asad", key: "5" },
    { name: "Shari", key: "6" },
    { name: "Ahmad", key: "7" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {myName.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
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
  item: {
    padding: 30,
    margin: 25,
    backgroundColor: "#000",
    color: "#fff",
    width: 300,
  },
});
