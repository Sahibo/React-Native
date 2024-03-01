import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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

import { Search } from "./src/components/reusables/StyledInput";

import HeartIcon from "./src/icons/HeartIcon";
import ShoppingCartIcon from "./src/icons/ShoppingCartIcon";
import SearchIcon from "./src/icons/SearchIcon";

export default function App() {
  const HandleOnClick = () => {
    console.log("button clicked");
  };

  return (
    <View style={styles.container}>
      <Search>
        <ShoppingCartIcon color="black" />
      </Search>

      <CustomButton onPress={HandleOnClick} height={40} width={78}>
        <ShoppingCartIcon color="#FFFFFF" />
      </CustomButton>

      <PrimaryButton onPress={HandleOnClick} height={200} width={200}>
        <ButtonText>Hello</ButtonText>
      </PrimaryButton>

      <SecondaryButton onPress={HandleOnClick} height={40} width={78}>
        <HeartIcon />
      </SecondaryButton>

      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
