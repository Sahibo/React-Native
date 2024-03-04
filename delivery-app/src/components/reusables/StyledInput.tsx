import React, { Children, ReactNode } from "react";
import { View, TextInput, Text } from "react-native";

import SearchIcon from "../../icons/SearchIcon";
import { Typography } from "./StyledTypography";

interface IBaseInput {
  height: number;
  width: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  gap?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  flexDirection?: "row" | "column";
  alignItems: "stretch" | "center" | "flex-start" | "flex-end" | "baseline";
  justifyContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  onChangeText?: (text: string) => void;
  children: ReactNode;
}

const BaseInput = ({
  height = 48,
  width,
  paddingVertical = 12,
  paddingHorizontal = 25,
  gap = 16,
  borderRadius,
  borderWidth = 1,
  borderColor = "#D9D0E3",
  backgroundColor = "#FFFFFF",
  color = "#9586A8",
  placeholder,
  secureTextEntry = false,
  flexDirection = "row",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  onChangeText,
  children,
  ...props
}: IBaseInput) => {
  return (
    <View
      style={[
        {
          height,
          width,
          paddingVertical,
          paddingHorizontal,
          gap,
          borderRadius,
          borderWidth,
          borderColor,
          backgroundColor,
          flexDirection,
          alignItems,
          justifyContent,
        },
      ]}
    >
      {children}

      <TextInput
        style={[
          {
            color,
          },
        ]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

export const SearchInput = (props: any) => (
  <BaseInput
    width="100%"
    borderRadius={27}
    placeholder="Search"
    {...props}
  >
    <SearchIcon color={"black"} />
  </BaseInput>
);

export const PrimaryInput = (props: any) => (
  <BaseInput borderRadius={8} {...props} />
);
