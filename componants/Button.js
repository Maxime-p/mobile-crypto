import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function CustomButton(
    { outlined, link, color, children } = { outlined: false, color: 'white' }
) {
    const navigation = useNavigation()

    function getoutStyle(outlined, color) {
        console.log(outlined, color)
        if (outlined) {
            return {
                borderRadius: 8,
                alignItems: 'center',
                padding: 10,
                borderWidth: 1,
                borderColor: color,
            }
        } else {
            return {
                alignItems: 'center',
                backgroundColor: color,
                padding: 10,
                borderRadius: 8,
            }
        }
    }

    const press = () => {
        navigation.navigate(link)
    }

    return (
        <TouchableOpacity onPress={press} style={getoutStyle(outlined, color)}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
