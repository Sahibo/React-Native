import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import { ButtonText, Typography } from "./reusables/StyledTypography";
import { H1 } from "./reusables/StyledTypography";

type Props = {
  text: string;
};

const FormHeader = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.sideContainer, styles.leftContainer]}>
        <ChevronLeftIcon />
      </View>

      <H1 children={text} />

      <View style={[styles.sideContainer, styles.rightContainer]}>
        {text === "Log In" ? (
          <ButtonText children={"register"} color={"#9586A8"} />
        ) : text === "Sign Up" ? (
          <ButtonText children={"login"} color={"#9586A8"} />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 60,
    marginBottom: 16,
  },
  sideContainer: {
    height: 42,
    width: 100,
    justifyContent: "center",
  },
  leftContainer: {
    alignItems: "flex-start",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
});

export default FormHeader;
