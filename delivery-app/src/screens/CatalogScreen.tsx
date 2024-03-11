import React, { useState } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import ListCard from "../components/ListCard";
import { H1 } from "../components/reusables/StyledTypography";
import { SearchInput } from "../components/reusables/StyledInput";
import Chips from "../components/Chips";

interface Props {
  route?: any;
  navigation?: any;
}

const CatalogScreen = ({ navigation, route }: Props) => {
  const { data } = route.params;

  function extractAllProducts(data: { subCategories: any[] }) {
    const allProducts: any[] = [];

    data.subCategories.forEach((subCategory) => {
      allProducts.push(...subCategory.products);
    });

    return allProducts;
  }

  function renderListCard() {
    const allProducts = extractAllProducts(data);

    return allProducts.map((data: any, key: any) => (
      <ListCard key={key} data={data} navigation={navigation} />
    ));
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <H1 children={data.name} marginBottom={5} />
        <SearchInput />
      </View>

      <View style={styles.chipsContainer}>
        <Chips />
      </View>
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderListCard()}
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
  chipsContainer: {
    height: 88,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
});

export default CatalogScreen;

{
  /* <FlatList
          data={item}
          renderItem={({ item }) => <ListCard />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        /> */
}

// interface SubCategoryProps {
//   name: string;
//   products: ItemProps[];
// }

// interface ItemProps {
//   name: string;
//   price: number;
//   unit: string;
//   country: string;
//   description: string;
//   isFavorite: boolean;
//   inCart: boolean;
//   image: string;
// }
