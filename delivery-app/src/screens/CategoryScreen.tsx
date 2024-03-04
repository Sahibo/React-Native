import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GridCard from "../components/GridCard";
import { H1 } from "../components/reusables/StyledTypography";
import { SearchInput } from "../components/reusables/StyledInput";

const CategoryScreen = () => {
  const data = Array.from({ length: 9 }).map((_, index) => ({
    id: index.toString(),
  }));
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <H1 children={"Categories"} marginBottom={5} />
        <SearchInput />
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <GridCard />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
          columnWrapperStyle={styles.flatListContent}
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
  contentContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  flatListContent: {
    alignItems: "flex-start",
    gap: 20,
  },
});

export default CategoryScreen;
