import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../components/Colors";
import { PrimaryButton } from "../components/reusables/StyledButton";
import { ButtonText } from "./reusables/StyledTypography";

interface ButtonsProps {
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  onPrimaryButtonClick: () => void;
  onSecondaryButtonClick: () => void;
}

const ButtonsComponent = ({
  primaryButtonLabel,
  secondaryButtonLabel,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}: ButtonsProps) => {
  return (
    <View style={styles.container}>
      <PrimaryButton width={"100%"} onPress={onPrimaryButtonClick}>
        <ButtonText children={primaryButtonLabel} />
      </PrimaryButton>
      <ButtonText
        children={secondaryButtonLabel}
        textAlign={"center"}
        color={Colors.textSecondary}
        onPress={onSecondaryButtonClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 32,
  },
});

export default ButtonsComponent;
