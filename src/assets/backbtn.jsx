import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
const BackBtn = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#2D3648"
      d="M22.59 16.756a.833.833 0 0 0-1.18-1.179l-5.833 5.834a.833.833 0 0 0 0 1.178l5.834 5.834a.834.834 0 0 0 1.178-1.179l-4.41-4.41h9.654a.833.833 0 1 0 0-1.667H18.18l4.41-4.411Z"
    />
    <Rect
      width={42}
      height={42}
      x={1}
      y={1}
      stroke="#B1B2B2"
      strokeWidth={2}
      rx={5}
    />
  </Svg>
)
export default BackBtn
