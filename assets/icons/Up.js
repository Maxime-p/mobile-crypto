import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Up(props) {
    return (
        <Svg width="1em" height="1em" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <Path d="M4 .8l3.5 6h-7L4 .8z" fill={props.color} />
        </Svg>
    )
}
