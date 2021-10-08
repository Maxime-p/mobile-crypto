import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Search(props) {
    return (
        <Svg
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.652 14.271l4.181 4.18-1.381 1.382-4.18-4.181a8.748 8.748 0 01-5.485 1.922C3.937 17.574 0 13.638 0 8.787 0 3.937 3.937 0 8.787 0c4.85 0 8.787 3.937 8.787 8.787a8.748 8.748 0 01-1.922 5.484zm-1.959-.724a6.812 6.812 0 001.928-4.76 6.833 6.833 0 00-6.834-6.834 6.832 6.832 0 00-6.834 6.834 6.833 6.833 0 006.834 6.834 6.812 6.812 0 004.76-1.928l.146-.146z"
                fill={props.color}
            />
        </Svg>
    )
}
