import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Shelter(props) {
    return (
        <Svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M10.085 25.707c1.117.048 2.236-.05 3.328-.29a11.734 11.734 0 013.974-.174c.729.089 1.313.22 1.717.342 1.437.367 3.48.298 4.007-.546.388-.624.337-1.05-.035-1.599a2.513 2.513 0 00-.283-.347 34.142 34.142 0 01-3.328-3.037 21.543 21.543 0 01-2.102-2.524l-.048-.07c-.99-1.52-2.078-1.423-2.67-.423-.373.626-.799 1.22-1.273 1.774a15.226 15.226 0 01-1.74 1.73c-.164.14-.67.56-.55.458-.005.004-.022.02.069-.094-.131.16-1.267 1.169-1.6 1.549-.687.777-.964 1.44-.86 1.973.096.502.292.783.6.994.194.13.411.223.64.274l.154.01zm9.464-9.702c1.835 2.627 4.976 5.058 4.976 5.058s2.751 2.33.85 5.384C23.473 29.5 18.37 28.15 18.37 28.15s-2.027-.654-4.382-.131c-2.353.527-4.381.327-4.381.327s-2.941-.327-3.536-3.412c-.595-3.086 2.747-5.387 3.01-5.712.26-.33 2.017-1.431 3.27-3.544 1.253-2.115 4.777-3.387 7.197.326zm7.386-1.893c0 .61.253 3.19-2.071 3.243-2.323.05-2.421-1.571-2.421-2.734 0-1.217.25-2.94 2.12-2.94 1.866 0 2.372 1.826 2.372 2.432v-.001zm-7.24-3.703c-1.574-.202-1.93-1.629-1.778-3.057.128-1.167 1.524-2.959 2.642-2.701 1.116.253 2.133 1.733 1.928 3.005-.202 1.276-1.215 2.957-2.792 2.753zm-6.688-.489c-1.147 0-2.08-1.324-2.08-2.96S11.859 4 13.007 4c1.15 0 2.08 1.324 2.08 2.96s-.93 2.96-2.08 2.96zm-5.058 6.088c-2.26.487-3.101-2.13-2.853-3.353 0 0 .267-2.65 2.101-2.814 1.458-.126 2.531 1.468 2.642 2.38.068.592.377 3.3-1.89 3.787z"
                fill={props.color}
            />
        </Svg>
    )
}