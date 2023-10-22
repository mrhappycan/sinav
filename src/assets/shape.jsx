import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Shape = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#322E2E"
      fillRule="evenodd"
      d="M12.5 1.333a.667.667 0 0 0-.667-.666h-9A2.333 2.333 0 0 0 .5 3v10a2.333 2.333 0 0 0 2.333 2.333h9a.667.667 0 0 0 .667-.666V1.333Zm-10.374.96A1 1 0 0 1 2.833 2h8.334v8.667H2.833c-.349 0-.69.078-1 .225V3a1 1 0 0 1 .293-.707ZM1.833 13a1 1 0 0 0 1 1h8.334v-2H2.833a1 1 0 0 0-1 1Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Shape
