import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default function Search({ search, onSearch }) {
  return (
    <View
      style={{ backgroundColor: "#F3F3F7", fontSize: 30, color: "#0066CC" }}
    >
      <TextInput
        value={search}
        onChangeText={onSearch}
        style={styles.faculty}
        placeholder="  Search ..."
        placeholderTextColor="#DAE0E2"
        autoCapitalize="none"
        autoCorrect={false}
      />
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
    color: "#0066CC",
    fontSize: 20,
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
