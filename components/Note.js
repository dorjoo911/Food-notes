import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Note({ item, index }) {
  return (
    <View key={index} style={styles.lineStyle}>
      <Text>{item.header}</Text>
      <Text>{item.comment}</Text>
      <Text>{item.date}</Text>
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
