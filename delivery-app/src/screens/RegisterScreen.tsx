import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

import FormHeader from "../components/FormHeader";
import FormComponent from "../components/FormComponent";

interface Props {
  route?: any;
  navigation?: any;
}

const RegisterScreen = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <FormHeader text={"Sign Up"} navigation={navigation}/>
      <View style={styles.innerContainer}>
        <FormComponent formType="Sign Up" navigation={navigation}/>
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
    gap: 32,

    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
});

export default RegisterScreen;
