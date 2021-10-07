import * as React from "react"
import Svg, {Path} from "react-native-svg"

export default function Down(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" width="1em" height="1em" fill="none"{...props}>
            <Path d="M4 6.8L.5.8h6.9L4 6.8z" fill={props.color} />
        </Svg>
    )
}
