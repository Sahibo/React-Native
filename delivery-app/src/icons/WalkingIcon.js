import * as React from "react"
import Svg, { Path } from "react-native-svg"
const WalkingIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.868 5.347a1.174 1.174 0 1 0 0-2.347 1.174 1.174 0 0 0 0 2.347ZM15.215 21.778l-.998-2.995a2.348 2.348 0 0 0-.567-.918l-3.13-3.129m0 0 1.174-5.868m-1.173 5.868L7 21.778m4.694-12.91 3.252 3.252c.178.178.384.326.61.44l2.007 1.002m-5.869-4.694-2.85 1.9c-.435.29-.76.716-.925 1.211L7 14.736"
    />
  </Svg>
)
export default WalkingIcon
