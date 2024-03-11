import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserScreen from "../../screens/UserScreen";
import AddAdressScreen from "../../screens/AddAdressScreen";

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddAdressScreen"
        component={AddAdressScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigation;
