import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Alert, Image, Button } from "react-native";

export default function Food({ item, index }) {
  const navigation = useNavigation();

  const editFoodScreen = () => {
    navigation.navigate("EditFood", { data: item });
  };
  const viewFoodScreen = () => {
    navigation.navigate("ViewFood", { data: item });
  };
  // const dailyNotesScreen = () => {
  //   navigation.navigate("DailyNotes", { data: item });
  // };
  const removeItem = (id) => {
    console.log("delete successfully", id);
  };
  const deletePressed = () => {
    Alert.alert("Inforformation", "Do you really want to delete this item?", [
      {
        text: "No",
        onPress: () => {
          close();
        },
      },
      {
        text: "Yes",
        onPress: () => {
          removeItem(id);
        },
      },
    ]);
    navigation.navigate("ListOfFood");
  };
  return (
    <View
      key={index}
      style={{ backgroundColor: index % 2 === 0 ? "white" : "#F3F3F7" }}
    >
      <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />
      <Text>Name: {item.name}</Text>
      <Text>Origin: {item.origin}</Text>
      <Text>Price: ${item.price}</Text>
      <Text>Date: {item.date}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button title="Edit" onPress={editFoodScreen} />
        <Button title="Delete" onPress={deletePressed} />
        <Button title="View" onPress={viewFoodScreen} />
        {/* <Button title="Notes" onPress={dailyNotesScreen} /> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  edges: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    minWidth: 50,
  },
  stars: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
    minWidth: 50,
  },
  course: {
    flexDirection: "column",
    flex: 8,
  },
  faculty: {
    color: "grey",
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066CC",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12,
    textAlign: "center",
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
  },
});
