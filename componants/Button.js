import React from 'react'
import { Button, StyleSheet } from 'react-native'
import {
    NavigationContainer,
    createNavigationContainerRef,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const navigationRef = createNavigationContainerRef()

function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params)
    }
}

export default function CustomButton({ outlined, text, link }) {
    if (outlined) {
        return (
            <Button
                title={text}
                type="outline"
                onPress={() => navigate('Adoption')}
            />
        )
    } else {
        return <Button title={text} onPress={() => navigate('Adoption')} />
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
