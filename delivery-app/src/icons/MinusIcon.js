import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MinusIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 12h14"
    />
  </Svg>
)
export default MinusIcon
