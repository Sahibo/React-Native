import * as React from "react";
import Svg, { Path } from "react-native-svg";
const XIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 6 6 18M6 6l12 12"
    />
  </Svg>
);
export default XIcon;
