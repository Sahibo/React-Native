import {
  GreyTextXSmall,
  GreyTextSmall,
  GreyTextMedium,
  GreyTextLarge,
  GreyTextXLarge,
  ButtonText,
} from "./src/components/reusables/StyledTypography";

import {
  PrimaryButton,
  SecondaryButton,
} from "./src/components/reusables/StyledButton";

import {
  PrimaryInput,
  SearchInput,
} from "./src/components/reusables/StyledInput";

import HeartIcon from "./src/icons/HeartIcon";
import ShoppingCartIcon from "./src/icons/ShoppingCartIcon";
import SearchIcon from "./src/icons/SearchIcon";
import UserIcon from "./src/icons/UserIcon";

import GridCard from "./src/components/GridCard";
import ListCard from "./src/components/ListCard";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import CatalogScreen from "./src/screens/CatalogScreen";
import ProductScreen from "./src/screens/ProductScreen";

import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navigations/bottomTabNavigation/index";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import AuthProvider from "./src/context/AuthContext";
import CartProvider from "./src/context/CartContext";
import UserProvider from "./src/context/UserContext";

import RootNavigation from "./src/navigations/rootNavigation/index";

export default function App() {

  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          <View style={styles.container}>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
            <StatusBar style="auto" />
          </View>
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F5F5",
    justifyContent: "center",
  },
});

{
  /* <WelcomeScreen /> */
}
{
  /* <RegisterScreen /> */
}
{
  /* <LoginScreen /> */
}
{
  /* <CatalogScreen /> */
}
{
  /* CategoryScreen */
}

{
  /* <CustomButton onPress={HandleOnClick} height={40} width={78}>
        <ShoppingCartIcon
          color="rgba(114, 3, 255, 0.5);"
          borderColor="rgb(114, 3, 255);"
        />
      </CustomButton> */
}
{
  /* <SearchInput />

      <PrimaryInput width={"100%"} placeholder={"text"}></PrimaryInput>

      <CustomButton onPress={HandleOnClick} height={40} width={78}>
        <ShoppingCartIcon color="#FFFFFF" />
      </CustomButton>

      <PrimaryButton
        flexDirection={"row"}
        onPress={HandleOnClick}
        height={50}
        width={200}
        gap={16}
      >
        <ShoppingCartIcon color="#FFFFFF" />
        <ButtonText>Hello</ButtonText>
      </PrimaryButton>

      <SecondaryButton onPress={HandleOnClick} height={40} width={78}>
        <HeartIcon />
      </SecondaryButton> */
}
