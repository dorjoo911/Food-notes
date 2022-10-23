import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Alert, Image, Button } from "react-native";

export default function ViewFood({ navigation, route }) {
  const dailyNotesScreen = () => {
    navigation.navigate("DailyNotes");
  };
  const item = route.params.data;
  return (
    <View>
      <Image source={{ uri: item.url }} style={{ width: 200, height: 200 }} />
      <Text>Name: {item.name}</Text>
      <Text>Origin: {item.origin}</Text>
      <Text>Price: ${item.price}</Text>
      <Text>Date: {item.date}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button title="Notes" onPress={dailyNotesScreen} />
      </View>
    </View>
  );
}
