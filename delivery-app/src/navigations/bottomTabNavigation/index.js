import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryScreen from "../../screens/CategoryScreen";
import CartScreen from "../../screens/CartScreen";
import UserScreen from "../../screens/UserScreen";

import GridIcon from "../../icons/GridIcon";
import ShoppingCartIcon from "../../icons/ShoppingCartIcon";
import UserIcon from "../../icons/UserIcon";
import { StyleSheet } from "react-native";

import CategoryNavigation from "../categoryNavigation/index";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <GridIcon
              color={focused ? "rgba(114, 3, 255, 0.5);" : null}
              borderColor={focused ? "rgb(114, 3, 255);" : null}
            />
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
            <ShoppingCartIcon
              color={focused ? "rgba(114, 3, 255, 0.5);" : null}
              borderColor={focused ? "rgb(114, 3, 255);" : null}
            />
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
            <UserIcon
              color={focused ? "rgba(114, 3, 255, 0.5);" : null}
              borderColor={focused ? "rgb(114, 3, 255);" : null}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
