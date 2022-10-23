import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import FoodContext from "../OwnerContext";

export default function AddNotes({ navigation }) {
  const { data } = useContext(FoodContext);
  console.log(data[0].notes);
  const [header, setheader] = useState("");
  const [comment, setcomment] = useState("");

  const saveAndBack = () => {
    // add note API call
    navigation.navigate("DailyNotes");
  };

  return (
    <View>
      <TextInput
        placeholder="Header"
        value={header}
        onChangeText={(text) => setheader(text)}
        style={styles.lineStyle}
      />
      <TextInput
        placeholder="comment"
        value={comment}
        onChangeText={(text) => setcomment(text)}
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
