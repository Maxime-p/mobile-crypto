import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

export default function Dollar(props) {
    return (
        <Svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={12} cy={12} r={12} fill="#F06D76" />
            <Circle cx={12} cy={12} r={9.5} fill="#F06D76" stroke="#fff" />
            <Path
                d="M11.443 17.112c-.98-.093-1.75-.397-2.31-.91s-.84-1.279-.84-2.296h1.89c0 .7.42 1.11 1.26 1.232l.014-2.17a7.516 7.516 0 01-1.582-.35 2.48 2.48 0 01-1.092-.812c-.29-.373-.434-.882-.434-1.526 0-.924.243-1.661.728-2.212.495-.55 1.297-.873 2.408-.966V6.36h1.498v.77c.933.121 1.624.439 2.072.952.448.504.672 1.171.672 2.002h-1.904a.93.93 0 00-.21-.616c-.13-.177-.345-.303-.644-.378v2.212c.663.075 1.218.187 1.666.336.457.14.835.401 1.134.784.308.373.462.9.462 1.582 0 .97-.29 1.708-.868 2.212-.57.495-1.367.789-2.394.882v.784h-1.526v-.77zm-1.008-6.958a.82.82 0 00.126.476c.093.121.21.215.35.28.15.065.336.121.56.168l.014-2.128c-.7.13-1.05.532-1.05 1.204zm2.534 4.956c.765-.112 1.148-.462 1.148-1.05a.637.637 0 00-.154-.448.799.799 0 00-.378-.266 2.682 2.682 0 00-.616-.154v1.918z"
                fill="#fff"
            />
        </Svg>
    )
}
