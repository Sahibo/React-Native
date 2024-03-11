import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { PrimaryInput } from "../components/reusables/StyledInput";
import { PrimaryButton } from "../components/reusables/StyledButton";
import { ButtonText } from "../components/reusables/StyledTypography";
import { Colors } from "../components/Colors";
import { useAuth } from "../context/AuthContext";
import { useUserContext } from "../context/UserContext";
import { Address } from "../interfaces";
const AddAdressScreen = ({}) => {
  const userContext = useUserContext();
  const [address, setAddress] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setAddress({ ...address, [field]: value });
  };

  const handleAddAddress = () => {
    const { user, addAddress } = userContext;

    if (user.addresses) {
      const addressData: Address = {
        id: user.addresses.length + 1,
        ...address,
      };

      addAddress(addressData);
      console.log("success", addressData);
    } else console.log("error", user.addresses);
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
      <PrimaryButton onPress={handleAddAddress}>
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
