import React, { useContext } from "react";
import { Dimensions, StyleSheet, View, Pressable } from "react-native";
import { H3, GreyTextSmall } from "./reusables/StyledTypography";
import { Image } from "expo-image";
import {
  PrimaryButton,
  SecondaryButton,
} from "../components/reusables/StyledButton";
import { Colors } from "../components/Colors";

import HeartIcon from "../icons/HeartIcon";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import { CartContext } from "../context/CartContext";

import * as SecureStore from "expo-secure-store";

interface Props {
  data?: any;
  route?: any;
  navigation?: any;
}

const { width } = Dimensions.get("window");
const itemWidth = width * 0.9;

function ListCard({ data, route, navigation }: Props) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(data); 
    console.log("Item added to cart:", data);
  };

  return (
    <Pressable
      onPress={() => navigation.navigate("ProductScreen", { data: data })}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={data.image} contentFit="cover" />
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.texts}>
          <H3>{data.name}</H3>
          <View style={styles.price}>
            <H3>{data.price}</H3>
            <GreyTextSmall>€ / {data.unit}</GreyTextSmall>
          </View>
        </View>

        <View style={styles.buttons}>
          <SecondaryButton height={40} width={70}>
            <HeartIcon />
          </SecondaryButton>

          <PrimaryButton height={40} width={70} onPress={handleAddToCart}>
            <ShoppingCartIcon borderColor={Colors.white} />
          </PrimaryButton>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    height: 160,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingVertical: 16,
  },
  innerContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    borderRadius: 8,
  },
  texts: {
    gap: 12,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  price: {
    gap: 2,
    flexDirection: "row",
  },
});

export default ListCard;
