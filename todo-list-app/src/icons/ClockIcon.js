import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

const ClockIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" fillOpacity={0} d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
    <Path fill="none" d="M0 0h20v20H0z" />
    <G
      stroke="#4A3780"
      strokeLinejoin="round"
      strokeWidth={1.667}
      clipPath="url(#a)"
    >
      <Path d="M10 18.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 0 1 0 16.666Z" />
      <Path strokeLinecap="round" d="M10 5v5l3.333 1.667" />
    </G>
  </Svg>
);
export default ClockIcon;
