import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import FoodContext from "../OwnerContext";

export default function LoginScreen({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const loginNav = () => {
    // Login API call
    navigation.navigate("ListOfFood");
  };

  return (
    <View>
      <TextInput
        placeholder="Email:"
        value={email}
        onChangeText={(text) => setemail(text)}
        style={styles.lineStyle}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.lineStyle}
      />
      <Button title="Submit" onPress={loginNav} />
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
