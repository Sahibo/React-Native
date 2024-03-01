import React, { ReactNode } from "react";
import { Pressable, TextInput, View } from "react-native";

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
  borderRadius = 8,
  borderWidth,
  borderColor,
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

export const Search = (props: any) => (
  <BaseInput
    width="100%"
    borderWidth={1}
    borderRadius={27}
    borderColor="#D9D0E3"
    placeholder="Search"
    {...props}
  />
);
