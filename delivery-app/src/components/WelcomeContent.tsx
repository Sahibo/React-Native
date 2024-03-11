import React from "react";
import { StyleSheet, View } from "react-native";
import CircleIcon from "../icons/CircleIcon";
import BoxIcon from "../icons/BoxIcon";
import { H1, GreyTextMedium } from "../components/reusables/StyledTypography";
import { PrimaryButton } from "../components/reusables/StyledButton";
import { ButtonText } from "./reusables/StyledTypography";
import { Colors } from "./Colors";

const WelcomeContent = () => {
  return (
    <View style={styles.container}>
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

      <View style={styles.buttonsContainer}>
        <PrimaryButton height={56} width={"100%"}>
          <ButtonText children={"ORDER NOW"} />
        </PrimaryButton>
        <ButtonText children={"DISMISS"} color={Colors.textSecondary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
    alignItems: "center",
  },
});

export default WelcomeContent;
