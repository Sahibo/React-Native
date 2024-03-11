import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { AuthContext } from "../context/AuthContext";
interface Props {
  navigation?: any;
}
const UserScreen = ({ navigation }: Props) => {
  const { signOut } = useContext(AuthContext);

  const handleSignout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error during signout:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User page</Text>

      <Pressable style={styles.button} onPress={handleSignout}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("AddAdressScreen")}
      >
        <Text style={styles.buttonText}>Add Address</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add Card</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default UserScreen;
