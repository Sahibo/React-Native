import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HeartIcon = (props) => {
  const { color } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height={25}
      width={25}
      {...props}
    >
      <Path
        stroke={color || "#9586A8"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z"
      />
    </Svg>
  );
};

export default HeartIcon;
