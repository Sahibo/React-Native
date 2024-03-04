import { Dimensions, StyleSheet, View } from "react-native";
import { H3, GreyTextSmall } from "./reusables/StyledTypography";
import { Image } from "expo-image";
import {
  SecondaryButton,
  CustomButton,
} from "../components/reusables/StyledButton";
import HeartIcon from "../icons/HeartIcon";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";

const { width } = Dimensions.get("window");
const itemWidth = width * 0.9;

function ListCard({}) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require("../images/apelsin.png")}
          contentFit="cover"
        />
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.texts}>
          <H3>Boston Lettuce</H3>
          <View style={styles.price}>
            <H3>1.10</H3>
            <GreyTextSmall>€ / piece</GreyTextSmall>
          </View>
        </View>

        <View style={styles.buttons}>
          <SecondaryButton height={40} width={70}>
            <HeartIcon />
          </SecondaryButton>

          <CustomButton height={40} width={70}>
            <ShoppingCartIcon borderColor="white" />
          </CustomButton>
        </View>
      </View>
    </View>
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
