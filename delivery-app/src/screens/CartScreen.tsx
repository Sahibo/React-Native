import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const CartScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Cart page</Text>

      {/* <Button title="Address" onPress={() => navigation.navigate('AddressScreen')} /> */}
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

export default CartScreen;
