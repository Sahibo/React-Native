import React, { ReactNode } from "react";
import { Pressable } from "react-native";

interface IBaseButton {
  height: number;
  width: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
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
  height,
  width,
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
          borderRadius,
          borderWidth,
          borderColor,
          backgroundColor,
          flexDirection,
          alignItems,
          justifyContent,
        },
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export const CustomButton = (props: any) => <BaseButton {...props} />;

export const PrimaryButton = (props: any) => (
  <BaseButton height={56} {...props} />
);

export const SecondaryButton = (props: any) => (
  <BaseButton
    backgroundColor="#FFFFFF"
    borderWidth={1}
    borderColor="#D9D0E3"
    {...props}
  />
);
