import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

type WeightType = {
  normal: TextStyle;
  medium: TextStyle;
  semiBold: TextStyle;
  bold: TextStyle;
};

const WEIGHT: WeightType = {
  normal: {
    fontWeight: "400",
  },
  medium: {
    fontWeight: "500",
  },
  semiBold: {
    fontWeight: "600",
  },
  bold: {
    fontWeight: "700",
  },
};

interface IBaseText {
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  color?: string;
  textAlign?: "center" | "justify" | "auto" | "left" | "right" | undefined;
  weight: "normal" | "medium" | "semiBold" | "bold";
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined;
  textStyles?: TextStyle;
}

const BaseText = ({
  weight,
  fontSize,
  lineHeight,
  letterSpacing,
  textAlign,
  textDecorationLine,
  color = "#2D0C57",
  textStyles,
  ...props
}: IBaseText) => {
  return (
    <Text
      style={[
        {
          ...WEIGHT[weight],
          fontSize,
          lineHeight,
          letterSpacing,
          textAlign,
          textDecorationLine,
          color,
        },
        textStyles,
      ]}
      {...props}
    />
  );
};

export const Typography = (props: any) => <BaseText {...props} />;

export const H1 = (props: any) => (
  <BaseText
    fontSize={34}
    lineHeight={42}
    weight="bold"
    letterSpacing={0.41}
    {...props}
  />
);

export const H2 = (props: any) => (
  <BaseText
    fontSize={30}
    lineHeight={41}
    weight="bold"
    letterSpacing={0.41}
    {...props}
  />
);

export const H3 = (props: any) => (
  <BaseText fontSize={22} lineHeight={22} weight="bold" {...props} />
);

export const H4 = (props: any) => (
  <BaseText fontSize={18} lineHeight={22} weight="semiBold" {...props} />
);

export const GreyTextXSmall = (props: any) => (
  <BaseText
    fontSize={12}
    lineHeight={14}
    weight="normal"
    color="#9586A8"
    {...props}
  />
);

export const GreyTextSmall = (props: any) => (
  <BaseText
    fontSize={14}
    lineHeight={22}
    weight="normal"
    color="#9586A8"
    {...props}
  />
);

export const GreyTextMedium = (props: any) => (
  <BaseText
    fontSize={18}
    lineHeight={24}
    weight="normal"
    color="#9586A8"
    {...props}
  />
);

export const GreyTextLarge = (props: any) => (
  <BaseText
    fontSize={24}
    lineHeight={24}
    weight="normal"
    color="#9586A8"
    {...props}
  />
);

export const GreyTextXLarge = (props: any) => (
  <BaseText
    fontSize={24}
    lineHeight={44}
    weight="normal"
    color="#9586A8"
    {...props}
  />
);

export const ButtonText = (props: any) => (
  <BaseText
    fontSize={15}
    lineHeight={18}
    weight="medium"
    color="#FFFFFF"
    {...props}
  />
);
