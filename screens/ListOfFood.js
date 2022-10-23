import React, { useContext, useState } from "react";
import { Button, FlatList, SafeAreaView, Text, View } from "react-native";
import Food from "../components/Food";
import Search from "../components/Search";
import FoodContext from "../OwnerContext";

export default function ListOfFood({ navigation }) {
  const { data } = useContext(FoodContext); //global data
  console.log(data[0].food); // used only first user data
  const [displayList, setDisplayList] = useState(data[0].food);
  const [search, setSearch] = useState("");

  //Jump to NewFoodScreen
  const goNewFoodScreen = () => {
    navigation.navigate("NewFood");
  };

  // Search input
  const onSearch = (text) => {
    const res = data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setSearch(text);
    setDisplayList(res);
  };

  const renderItem = ({ item, index }) => {
    return <Food item={item} index={index} />;
  };

  return (
    <View>
      <Button title="Add New Food" onPress={goNewFoodScreen} />
      <Search data={data} onSearch={onSearch} search={search} />
      <SafeAreaView>
        <FlatList
          data={displayList}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          // tmp: name for _id
        />
      </SafeAreaView>
    </View>
  );
}
