import React, { useContext } from "react";
import { Button, FlatList, SafeAreaView, Text } from "react-native";
import Note from "../components/Note";
import FoodContext from "../OwnerContext";

export default function DailyNotes({ navigation }) {
  const { data } = useContext(FoodContext);
  console.log(data[0].notes);

  const addNoteScreen = () => {
    navigation.navigate("AddNotes");
  };

  const renderItem = ({ item, index }) => {
    return <Note index={index} item={item} />;
  };
  return (
    <SafeAreaView>
      <Button title="Add Note" onPress={addNoteScreen} />
      <FlatList
        data={data[0].notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.comment}
      />
    </SafeAreaView>
  );
}
