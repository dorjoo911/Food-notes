import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import TabNavigator from "./navigations/TabNavigator";
import FoodContext, { FoodStore } from "./OwnerContext";
import { useContext } from "react";

export default function App() {
  const login = true; // tmp: condition

  return (
    <FoodStore>
      <NavigationContainer>
        {login ? <TabNavigator /> : <LoginScreen />}
      </NavigationContainer>
    </FoodStore>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
