import React from "react";
import { View, ScrollView, FlatList, StyleSheet, Text } from "react-native";
import { GreyTextSmall } from "../components/reusables/StyledTypography";
import CheckIcon from "../icons/CheckIcon";

const data = [
  { id: "1", label: "Chip gfjyfhfh1", selected: false },
  { id: "2", label: "Chip 2", selected: false },
  { id: "3", label: "Chip 3", selected: true },
  { id: "4", label: "Chip 4", selected: false },
  { id: "5", label: "Chip 5", selected: true },
  { id: "6", label: "Chip 6", selected: false },
  { id: "7", label: "Chip 7", selected: false },
  { id: "8", label: "Chip 8", selected: true },
  { id: "9", label: "Chip 9", selected: false },
  { id: "10", label: "Chip 10", selected: false },
  { id: "11", label: "Chip 11", selected: true },
  { id: "12", label: "Chip 12", selected: false },
];

const Chips = () => {
  const chunkSize = data.length / 2;
  const dataChunks = [];

  for (let i = 0; i < data.length; i += chunkSize) {
    dataChunks.push(data.slice(i, i + chunkSize));
  }

  return (
    <View style={styles.container}>
      {dataChunks.map((chunk, index) => (
        <View key={index} style={styles.chipsRow}>
          <FlatList
            horizontal
            data={chunk}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.chipContainer}>
                {item.selected && (
                  <CheckIcon height={24} width={24} color={"#6C0EE4"} />
                )}
                <GreyTextSmall children={item.label} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  chipsRow: {
    flexDirection: "row",
  },
  chipContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 24,
    gap: 8,
    backgroundColor: "#E2CBFF",
  },
  chip: {},
  selectedChip: {
    backgroundColor: "#E2CBFF",
  },
});

export default Chips;
