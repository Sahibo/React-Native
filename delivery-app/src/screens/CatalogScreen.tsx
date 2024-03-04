import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import ListCard from "../components/ListCard";
import { H1 } from "../components/reusables/StyledTypography";
import { SearchInput } from "../components/reusables/StyledInput";
import Chips from "../components/Chips";



const CatalogScreen = () => {
  const data = Array.from({ length: 9 }).map((_, index) => ({
    id: index.toString(),
  }));
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <H1 children={"Vegetables"} marginBottom={5} />
        <SearchInput />
      </View>
      
      <View style={styles.chipsContainer}>
        <Chips />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ListCard />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
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
