import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function CustomButton({ outlined, text, link }) {
    if (outlined) {
        return (
            <Button
                title={text}
                type="outline"
                onPress={() => navigation.navigate('Home')}
            />
        )
    } else {
        return (
            <Button title={text} onPress={() => navigation.navigate('Home')} />
        )
    }

    //   <Button title={text} onPress={() => navigation.push({ link })} />
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
    },
    full: {
        backgroundColor: 'red',
        color: 'white',
    },
    outlined: {
        color: 'red',
        borderColor: 'red',
        borderWidth: 2,
    },
})
