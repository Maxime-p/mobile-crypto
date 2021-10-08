import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Chevron(props) {
    return (
        <Svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8.107 8.73l3.972-3.971 1.134 1.134L8.107 11 3 5.893 4.135 4.76 8.107 8.73z"
                fill="#fff"
            />
        </Svg>
    )
}
