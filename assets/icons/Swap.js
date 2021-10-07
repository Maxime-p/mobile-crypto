import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Swap(props) {
    return (
        <Svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M7.164 6.013A13.283 13.283 0 0116 2.667c7.364 0 13.333 5.969 13.333 13.333a13.272 13.272 0 01-2.39 7.62L23.333 16h3.334A10.666 10.666 0 008.365 8.55l-1.2-2.535-.001-.002zm17.672 19.974A13.283 13.283 0 0116 29.333C8.636 29.333 2.667 23.364 2.667 16c0-2.833.884-5.46 2.39-7.62L8.667 16H5.333a10.667 10.667 0 0018.302 7.45l1.2 2.535.001.002z"
                fill={props.color}
            />
            <Path
                d="M13.61 8h4.78L23 23h-3.252l-.883-2.936h-5.708L12.23 23H9l4.61-15zm4.652 9.921l-2.176-7.135-2.283 7.135h4.459z"
                fill={props.color}
            />
        </Svg>
    )
}
