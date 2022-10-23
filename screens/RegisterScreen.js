import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

export default function RegisterScreen() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  const saveAndBack = () => {
    // Add new User API call
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
        placeholder="Name"
        value={name}
        onChangeText={(text) => setname(text)}
        style={styles.lineStyle}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.lineStyle}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        style={styles.lineStyle}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        style={styles.lineStyle}
      />
      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={(text) => setImage(text)}
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
