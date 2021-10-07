import React from 'react'
import { Text } from 'react-native'

function getTextStyle(color, font, fontWeight, fontFamily, align, uppercase) {
    return {
        color: color,
        fontSize: font,
        textAlign: align,
        fontWeight: fontWeight,
        fontFamily: fontFamily,
        textTransform: uppercase ? 'uppercase' : 'none'
    }
}

export default function CustomText(
    { color, font, fontWeight, fontFamily, align, uppercase, children, style } = {
        color: '#071D48',
        font: 16,
        fontWeight: 'medium',
        fontFamily: 'HelveticaNeue',
        align: 'start',
        uppercase: false
    }
) {
    return (
        <Text style={{...getTextStyle(color, font, fontWeight, fontFamily, align, uppercase), ...style}}>
            {children}
        </Text>
    )
}
