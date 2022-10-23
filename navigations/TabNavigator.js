import { MaterialCommunityIcons } from "react-native-vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ListOfFood from "../screens/ListOfFood";
import Profile from "../screens/Profile";
import StackNavigator from "./StackNavigator";

const BottomTab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Welcome">
      <BottomTab.Screen
        name="ListOfFood"
        component={StackNavigator}
        options={{
          title: "ListOfFood",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-man" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
