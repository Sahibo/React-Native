import React, { ReactNode } from "react";
import { Pressable } from "react-native";
import { Colors } from "../Colors";

interface IBaseButton {
  height: number;
  width?: number;
  paddingHorizontal: number;
  gap: number;
  borderRadius: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor: string;
  flexDirection?: "row" | "column";
  alignItems: "stretch" | "center" | "flex-start" | "flex-end" | "baseline";
  justifyContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flex: number;
  onPress: () => void;
  children: ReactNode;
}

const BaseButton = ({
  height = 56,
  width,
  paddingHorizontal = 29,
  gap = 16,
  borderRadius = 8,
  borderWidth,
  borderColor,
  backgroundColor = "#0BCE83",
  alignItems = "center",
  flexDirection,
  justifyContent = "center",
  onPress,
  children,
  ...props
}: IBaseButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          height,
          width,
          paddingHorizontal,
          borderRadius,
          borderWidth,
          borderColor,
          backgroundColor,
          flexDirection,
          alignItems,
          justifyContent,
          gap,
        },
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export const PrimaryButton = (props: any) => <BaseButton {...props} />;

export const SecondaryButton = (props: any) => (
  <BaseButton
    backgroundColor={Colors.white}
    borderColor={Colors.border}
    borderWidth={1}
    {...props}
  />
);
