import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function getTextStyle(bool) {
    if (bool) {
        return {
            color: 'white',
        }
    } else {
        return {
            color: 'red',
        }
    }
}

export default function CustomButton({ white, children } = { white: false }) {
    return <Text style={(styles.title, getTextStyle(white))}> {children} </Text>
}

const styles = StyleSheet.create({
    title: {},
    red: {},
    white: {},
})
