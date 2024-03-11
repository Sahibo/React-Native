import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import { AuthContext, User } from "../context/AuthContext";

import { PrimaryInput } from "./reusables/StyledInput";
import { PrimaryButton } from "../components/reusables/StyledButton";
import { ButtonText } from "./reusables/StyledTypography";
import { Colors } from "./Colors";

interface Props {
  formType: "Log In" | "Sign Up";
  navigation?: any;
}

const FormComponent = ({ formType, navigation }: Props) => {
  const { logIn, signUp } = useContext(AuthContext);

  const [credentials, setCredentials] = useState<User>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    const user: User = {
      id: 0, //tmp
      ...credentials,
    };

    if (formType === "Log In") {
      await logIn(user);
    } else {
      await signUp(user);
    }
  };

  const onPress = () => {
    if (formType === "Log In") {
      navigation.navigate("RegisterScreen");
      console.log("pressed");
    } else if (formType === "Sign Up") {
      navigation.navigate("LoginScreen");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        {formType === "Sign Up" && (
          <PrimaryInput
            placeholder={"Name"}
            onChangeText={(text: string) => handleInputChange("name", text)}
          />
        )}
        <PrimaryInput
          placeholder={"Email"}
          onChangeText={(text: string) => handleInputChange("email", text)}
        />
        <PrimaryInput
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(text: string) => handleInputChange("password", text)}
        />
        {formType === "Sign Up" && (
          <PrimaryInput
            placeholder={"Confirm password"}
            secureTextEntry
            onChangeText={(text: string) =>
              handleInputChange("confirmPassword", text)
            }
          />
        )}
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton height={56} width={"100%"} onPress={handleFormSubmit}>
          <ButtonText children={formType} fontSize={18} />
        </PrimaryButton>
        <ButtonText
          onPress={onPress}
          children={
            formType === "Log In"
              ? "Forgot your password?"
              : "Already have an account?"
          }
          color={Colors.textSecondary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputsContainer: {
    width: "100%",
    gap: 16,
  },
  buttonsContainer: {
    width: "100%",
    gap: 32,
    alignItems: "center",
  },
});

export default FormComponent;
