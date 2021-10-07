import React from "react";
import Svg, {Path} from "react-native-svg"

export default function Info(props) {
    return (
        <Svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M16 2.2C8.4 2.2 2.2 8.4 2.2 16c0 7.6 6.2 13.8 13.8 13.8 7.6 0 13.8-6.2 13.8-13.8 0-7.6-6.2-13.8-13.8-13.8zm8.1 21.9c-2.2 2.2-5 3.4-8.1 3.4-3.1 0-5.9-1.2-8.1-3.4-2.2-2.2-3.4-5-3.4-8.1s1.2-5.9 3.4-8.1c2.2-2.2 5-3.4 8.1-3.4s5.9 1.2 8.1 3.4c2.2 2.2 3.4 5 3.4 8.1 0 3.1-1.2 5.9-3.4 8.1z" fill={props.color}/>
            <Path d="M14.6 9h2.8v2.8h-2.8zM14.6 14.6h2.8V23h-2.8z" fill={props.color}/>
        </Svg>
    )
}


