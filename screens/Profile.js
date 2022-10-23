import React, { useContext } from "react";
import { Text, View, Image, Button } from "react-native";
import FoodContext from "../OwnerContext";

export default function Profile({ navigation }) {
  const { data } = useContext(FoodContext);
  console.log(data[0]);

  const profileEdit = () => {
    navigation.navigate("ProfileEdit", { email: data[0].email });
  };
  return (
    <View>
      <Image
        source={{ uri: data[0].image }}
        style={{ width: 80, height: 80 }}
      />
      <Text>Name: {data[0].name}</Text>
      <Text>Email: {data[0].email}</Text>
      <Text>Password: {data[0].password}</Text>
      <Text>Address: {data[0].address}</Text>
      <Text>Phone: {data[0].phone}</Text>
      <Button title="Edit Info" onPress={profileEdit} />
    </View>
  );
}
