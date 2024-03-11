import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../../screens/CategoryScreen";
import CatalogScreen from "../../screens/CatalogScreen";
import ProductScreen from "../../screens/ProductScreen";

const Stack = createNativeStackNavigator();

const CategoryNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CatalogScreen"
        component={CatalogScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CategoryNavigation;
