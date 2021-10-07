import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Import(props) {
    return (
        <Svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M17.333 13.333H24l-8 8-8-8h6.667V4h2.666v9.333zm-12 12h21.334V16h2.666v10.667A1.333 1.333 0 0128 28H4a1.333 1.333 0 01-1.333-1.333V16h2.666v9.333z"
                fill={props.color}
            />
        </Svg>
    )
}
