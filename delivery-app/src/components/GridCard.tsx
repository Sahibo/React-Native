import { Pressable, StyleSheet, View } from "react-native";
import { H4, GreyTextXSmall } from "./reusables/StyledTypography";
import { Image } from "expo-image";
import { Colors } from "./Colors";

interface Props {
  data?: any;
  navigation?: any;
}

function GridCard({ data, navigation }: Props) {
  //const { data } = data;
  //console.log("item", data);

  return (
    <Pressable
      onPress={() => navigation.navigate("CatalogScreen", { data: data })}
    >
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={data.image} contentFit="cover" />
        </View>
        <View style={styles.innerContainer}>
          <H4>{data.name}</H4>

          <GreyTextXSmall>{"| |"}</GreyTextXSmall>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
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
