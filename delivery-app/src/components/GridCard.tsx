import { Pressable, StyleSheet, View } from "react-native";
import { H4, GreyTextXSmall } from "./reusables/StyledTypography";
import { Image } from "expo-image";

function GridCard({}) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../images/apelsin.png")}
          contentFit="cover"
        />
      </View>
      <View style={styles.innerContainer}>
        <H4>Fruits</H4>

        <GreyTextXSmall>(32)</GreyTextXSmall>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D9D0E3",
    width: 165,
    height: 210,
  },
  image: {
    height: 140,
  },
  innerContainer: {
    paddingHorizontal: 16,
    gap: 10,
  },
});

export default GridCard;
