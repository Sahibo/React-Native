import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "../../navigations/homeNavigation/index";
import CartScreen from "../../screens/CartScreen";
import UserScreen from "../../screens/UserScreen";

import CircleIcon from "../../icons/CircleIcon";
import ShoppingCartIcon from "../../icons/ShoppingCartIcon";
import UserIcon from "../../icons/UserIcon";
import { Colors } from "../../components/unknown/Colors";

// import CategoryNavigation from "../categoryNavigation";
// import UserNavigation from "../userNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <CircleIcon color={focused ? Colors.green : null} />
          ),
        }}
      />

      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <CircleIcon color={focused ? Colors.green : null} />
          ),
        }}
      />

      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <CircleIcon color={focused ? Colors.green : null} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
