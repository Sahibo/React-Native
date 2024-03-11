import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Image } from "expo-image";
import {
  ButtonText,
  GreyTextMedium,
  GreyTextLarge,
  H1,
  H3,
  Typography,
} from "../components/reusables/StyledTypography";
import {
  PrimaryButton,
  SecondaryButton,
} from "../components/reusables/StyledButton";
import HeartIcon from "../icons/HeartIcon";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import { Colors } from "../components/Colors";

interface Props {
  data?: any;
  route?: any;
  navigation?: any;
}

const ProductScreen = ({ route, navigation }: Props) => {
  const { data } = route.params;
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={data.image} contentFit="cover" />
      </View>

      <View style={styles.whiteContainer}>
        <View style={styles.detailsHeaderContainer}>
          <H1 children={data.name} />

          <View style={styles.priceContainer}>
            <H1 children={data.price} />
            <GreyTextLarge>€ / {data.unit}</GreyTextLarge>
          </View>

          {data.unit === "piece" && (
            <Typography
              children={"~ 150 gr / piece"}
              fontSize={17}
              weight="medium"
              color="#06BE77"
            />
          )}
        </View>

        <View style={styles.descriptionContainer}>
          <H3 children={data.country} />
          <GreyTextMedium children={data.description} />
        </View>

        <View style={styles.buttonsContainer}>
          <SecondaryButton height={56} width={78}>
            <HeartIcon />
          </SecondaryButton>

          <PrimaryButton flex={1} flexDirection={"row"}>
            <ShoppingCartIcon borderColor={Colors.white} />
            <ButtonText children={"ADD TO CARD"} />
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "40%",
  },
  image: {
    flex: 1,
  },
  whiteContainer: {
    paddingHorizontal: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  detailsHeaderContainer: {
    gap: 8,
    justifyContent: "flex-start",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 22,
  },
});

export default ProductScreen;
