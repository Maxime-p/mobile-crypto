import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

export default function CoinBlack(props) {
    return (
        <Svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={12} cy={12} r={12} fill="#071D48" />
            <Circle cx={11.907} cy={11.906} r={9.5} fill="#071D48" stroke="#fff" />
            <Path
                d="M10.276 7.2h3.108L16.38 17h-2.114l-.574-1.918h-3.71L9.38 17h-2.1l2.996-9.8zm3.024 6.482L11.886 9.02l-1.484 4.662H13.3z"
                fill="#fff"
            />
        </Svg>
    )
}
