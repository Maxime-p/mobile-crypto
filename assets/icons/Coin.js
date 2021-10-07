import React from "react";
import Svg, {Path} from "react-native-svg"

export default function Coin(props) {
    return (
        <Svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M13.6 8h4.8L23 23h-3.3l-.9-2.9h-5.7l-.9 2.9H9l4.6-15zm4.7 9.9l-2.2-7.1-2.3 7.1h4.5z" fill={props.color}/>
            <Path d="M16 2.2C8.4 2.2 2.2 8.4 2.2 16c0 7.6 6.2 13.8 13.8 13.8 7.6 0 13.8-6.2 13.8-13.8 0-7.6-6.2-13.8-13.8-13.8zm8.1 21.9c-2.2 2.2-5 3.4-8.1 3.4-3.1 0-5.9-1.2-8.1-3.4-2.2-2.2-3.4-5-3.4-8.1s1.2-5.9 3.4-8.1c2.2-2.2 5-3.4 8.1-3.4s5.9 1.2 8.1 3.4c2.2 2.2 3.4 5 3.4 8.1 0 3.1-1.2 5.9-3.4 8.1z" fill={props.color}/>
        </Svg>
    )
}


