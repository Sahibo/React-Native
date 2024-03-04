import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GridIcon = (props) => {
  const { color, borderColor } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      width={24}
      fill="none"
      {...props}
    >
      <Path
        stroke={borderColor || "#9586A8"}
        fill={color || "transparent"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 3H3v7h7V3ZM21 3h-7v7h7V3ZM21 14h-7v7h7v-7ZM10 14H3v7h7v-7Z"
      />
    </Svg>
  );
};
export default GridIcon;
