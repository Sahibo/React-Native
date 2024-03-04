import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PrimaryInput } from "../components/reusables/StyledInput";
import {
  CustomButton,
  PrimaryButton,
} from "../components/reusables/StyledButton";
import { ButtonText } from "../components/reusables/StyledTypography";
import FormHeader from "../components/FormHeader";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FormHeader text={"Log In"} />

        <View style={styles.innerContainer}>
          <PrimaryInput placeholder={"Email"} flex={1} />
          <PrimaryInput placeholder={"Password"} flex={1} />
        </View>
      </View>

      <View style={styles.innerContainer}>
        <PrimaryButton height={56} width={"100%"}>
          <ButtonText children={"Log In"} fontSize={18} />
        </PrimaryButton>
        <ButtonText children={"Forgot your password?"} color={"#9586A8"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginVertical: 16,
    paddingBottom: 16,
  },
});

export default LoginScreen;
