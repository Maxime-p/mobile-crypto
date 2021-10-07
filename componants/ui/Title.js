import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function getTextStyle(color, font, fontWeight, fontfamilly) {
    return {
        color: color,
        fontSize: font,
        textAlign: 'justify',
        fontWeight: fontWeight,
        fontfamilly: fontfamilly,
    }
}

export default function CustomTitle(
    { color, font, fontWeight, text, fontfamilly } = {
        color: '#071D48',
        font: 16,
        fontWeight: 'medium',
        fontfamilly: 'Helvetica Neue',
    }
) {
    return (
        <Text style={getTextStyle(color, font, fontWeight, fontfamilly)}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {},
})
