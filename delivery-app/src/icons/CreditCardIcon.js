import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CreditCardIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM1 10h22"
    />
  </Svg>
);
export default CreditCardIcon;
