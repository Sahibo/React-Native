import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";
import GridCard from "../components/GridCard";
import { H1 } from "../components/reusables/StyledTypography";
import { SearchInput } from "../components/reusables/StyledInput";
import { categories } from "../../data";

// interface DataProps {
//   name: string;
//     image: string;
//     subCategories: {
//         name: string;
//         products: {
//             name: string;
//             price: number;
//             unit: string;
//             country: string;
//             description: string;
//             isFavorite: boolean;
//             inCart: boolean;
//             image: string;
//         }[];
//     }[];
// }

interface Props {
  //data: DataProps;
  navigation?: any;
}

const CategoryScreen = ({ navigation }: Props) => {
  const data = categories;
 // console.log("CategoryScreen", categories);

  function renderGridCards() {
    return categories.map((category, key) => (
      <GridCard key={key} data={category} navigation={navigation} />
    ));
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <H1 children={"Categories"} marginBottom={5} />
        <SearchInput />
      </View>

      <View style={styles.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        >
          {renderGridCards()}
        </ScrollView>
      </View>
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
  headerContainer: {
    justifyContent: "flex-end",
    width: "100%",
    height: 200,
    gap: 22,
    marginBottom: 22,
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
  },
});

export default CategoryScreen;
