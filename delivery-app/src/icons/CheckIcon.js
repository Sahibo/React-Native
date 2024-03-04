import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CheckIcon = (props) => {
  const { color } = props;
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <Path
        stroke={color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 6 9 17l-5-5"
      />
    </Svg>
  );
};
export default CheckIcon;
