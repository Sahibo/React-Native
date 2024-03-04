import {
  GreyTextXSmall,
  GreyTextSmall,
  GreyTextMedium,
  GreyTextLarge,
  GreyTextXLarge,
  ButtonText,
} from "./src/components/reusables/StyledTypography";

import {
  CustomButton,
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

import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navigations/bottomTabNavigation/index";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  const { width } = useWindowDimensions();

  const HandleOnClick = () => {
    console.log(width);
  };

  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      {/* <WelcomeScreen /> */}
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
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

{
  /* <GridCard />
      <ListCard /> */
}
{
  /* <WelcomeScreen /> */
}
{
  /* <CatalogScreen /> */
}
