import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BikeIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.267 6.267a1.133 1.133 0 1 0 0-2.267 1.133 1.133 0 0 0 0 2.267ZM12 18.733V14.2l-3.4-2.267 3.4-3.4 2.267 2.267 2.266 1.133M5.2 21a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8ZM18.8 21a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z"
    />
  </Svg>
);
export default BikeIcon;
