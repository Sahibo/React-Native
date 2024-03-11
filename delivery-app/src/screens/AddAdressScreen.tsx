import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { PrimaryInput } from "../components/reusables/StyledInput";
import { PrimaryButton } from "../components/reusables/StyledButton";
import { ButtonText } from "../components/reusables/StyledTypography";
import { Colors } from "../components/Colors";

const AddAdressScreen = ({}) => {
  const [address, setAddress] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setAddress({ ...address, [field]: value });
  };

  return (
    <View style={styles.container}>
      <Text>Add Address page</Text>
      <PrimaryInput
        placeholder={"Address"}
        onChangeText={(text: string) => handleInputChange("address", text)}
      />
      <PrimaryInput
        placeholder={"City"}
        onChangeText={(text: string) => handleInputChange("city", text)}
      />
      <PrimaryInput
        placeholder={"State"}
        onChangeText={(text: string) => handleInputChange("state", text)}
      />
      <PrimaryInput
        placeholder={"ZIP"}
        onChangeText={(text: string) => handleInputChange("ZIP", text)}
      />
      <PrimaryButton>
        <ButtonText children={"SAVE CARD"} />
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddAdressScreen;
