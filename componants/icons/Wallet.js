import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Wallet(props) {
    return (
        <Svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M29.333 9.333h1.334v13.334h-1.334v4A1.333 1.333 0 0128 28H4a1.333 1.333 0 01-1.333-1.333V5.333A1.333 1.333 0 014 4h24a1.333 1.333 0 011.333 1.333v4zm-2.666 13.334h-8a6.667 6.667 0 010-13.334h8V6.667H5.333v18.666h21.334v-2.666zM28 20v-8h-9.333a4 4 0 100 8H28zm-9.333-5.333h4v2.666h-4v-2.666z"
                fill={props.color}
            />
        </Svg>
    )
}
