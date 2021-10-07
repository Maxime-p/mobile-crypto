import React from "react";
import Svg, {Path} from "react-native-svg"

export default function Info(props) {
    return (
        <Svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 2.8a11.2 11.2 0 100 22.4 11.2 11.2 0 000-22.4zm1.4 7h-2.8V9h2.8v2.8zm0 11.2h-2.8v-8.4h2.8V23z"
                fill={props.color}
            />
        </Svg>
    )
}


