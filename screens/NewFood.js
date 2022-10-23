import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

export default function NewFood({ navigation }) {
  const [name, setName] = useState("");
  const [origin, setorigin] = useState("");
  const [price, setprice] = useState(0);
  const [url, setUrl] = useState("");

  const saveAndBack = () => {
    // Add new Food API call
    navigation.navigate("ListOfFood");
  };
  return (
    <View>
      <TextInput
        placeholder="name:"
        value={name}
        onChangeText={(t) => setName(t)}
        style={styles.lineStyle}
      />
      <TextInput
        placeholder="origin:"
        value={origin}
        onChangeText={(t) => setorigin(t)}
        style={styles.lineStyle}
      />
      <TextInput
        placeholder="price:"
        value={price}
        onChangeText={(t) => setprice(t)}
        style={styles.lineStyle}
      />
      <TextInput
        placeholder="url:"
        value={url}
        onChangeText={(t) => setUrl(t)}
        style={styles.lineStyle}
      />
      <Button title="Submit" onPress={saveAndBack} />
    </View>
  );
}
const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
    alignItems: "center",
  },
});
