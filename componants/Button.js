import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function CustomButton({ outlined, link, children }) {
    const navigation = useNavigation()

    const press = () => {
        navigation.navigate(link)
    }

    return (
        <TouchableOpacity onPress={press} style={styles.button}>
            {children}
        </TouchableOpacity>
    )
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
