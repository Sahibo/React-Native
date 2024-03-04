import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import CircleIcon from "../icons/CircleIcon";
import {
  H1,
  GreyTextMedium,
  ButtonText,
} from "../components/reusables/StyledTypography";
import { PrimaryButton } from "../components/reusables/StyledButton";

import Ellipse3 from "../icons/Ellipse3";
import Ellipse2 from "../icons/Ellipse2";
import Ellipse1 from "../icons/Ellipse1";
import BoxIcon from "../icons/BoxIcon";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleContainer}>
        <Ellipse3 style={styles.ellipse3} />
        <Ellipse2 style={styles.ellipse2} />
        <Ellipse1 style={styles.ellipse1} />
      </View>
      <View style={styles.whiteContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.iconsContainer}>
            <CircleIcon height={104} width={104} />
            <View style={styles.boxContainer}>
              <BoxIcon height={40} width={40} />
            </View>
          </View>
          <H1 children={"Non-Contact Deliveries"} textAlign={"center"} />
          <GreyTextMedium
            children={
              "When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door."
            }
            textAlign={"center"}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <PrimaryButton height={56} width={"100%"}>
            <ButtonText children={"ORDER NOW"} />
          </PrimaryButton>
          <ButtonText
            children={"DISMISS"}
            textAlign={"center"}
            color={"#9586A8"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#7E19FF99",
  },
  purpleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#A259FF",
  },
  whiteContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 64,
    paddingBottom: 32,
    paddingHorizontal: 20,
    gap: 48,
    backgroundColor: "#F6F5F5",
  },
  contentContainer: {
    alignItems: "center",
    gap: 24,
  },
  iconsContainer: {
    position: "relative",
  },
  boxContainer: {
    position: "absolute",
    top: "30%",
    left: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    gap: 32,
  },
  ellipse3: {
    position: "absolute",
    width: 600,
    height: 700,
    left: -25,
    top: -200,
  },
  ellipse2: {
    position: "absolute",

    width: 550,
    height: 500,
    left: 200,
    top: -125,
  },
  ellipse1: {
    position: "absolute",
    borderWidth: 1,

    width: 550,
    height: 450,
    left: 250,
    top: -150,
  },
});

export default WelcomeScreen;
