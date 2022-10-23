import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNotes from "../screens/AddNotes";
import DailyNotes from "../screens/DailyNotes";
import EditFood from "../screens/EditFood";
import ListOfFood from "../screens/ListOfFood";
import NewFood from "../screens/NewFood";
import ProfileEdit from "../screens/ProfileEdit";
import RegisterScreen from "../screens/RegisterScreen";
import ViewFood from "../screens/ViewFood";
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListOfFood" component={ListOfFood} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="DailyNotes" component={DailyNotes} />
      <Stack.Screen name="NewFood" component={NewFood} />
      <Stack.Screen name="EditFood" component={EditFood} />
      <Stack.Screen name="ViewFood" component={ViewFood} />
      <Stack.Screen name="AddNotes" component={AddNotes} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
    </Stack.Navigator>
  );
}
