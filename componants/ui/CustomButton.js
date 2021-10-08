import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function CustomButton(
    { text, icon, outlined, link, color, bgColor, style } = {
        icon: false,
        outlined: false,
        color: 'black',
        bgColor: 'white',
    }
) {
    const navigation = useNavigation()

    function getOutStyle(outlined, color, bgColor) {
        let style = {}

        if (outlined) {
            style = {
                borderWidth: 2,
                borderColor: color,
            }
        } else {
            style = {
                backgroundColor: bgColor,
            }
        }

        return {
            ...style,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            padding: 16,
        }
    }

    const press = () => {
        if (link) {
            navigation.navigate(link)
        }
    }

    return (
        <TouchableOpacity
            onPress={press}
            style={{ ...getOutStyle(outlined, color, bgColor), ...style }}
        >
            <View style={styles.icon}>{icon}</View>
            <Text style={{ ...styles.text, color }}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        marginRight: 8,
    },
    text: {
        textTransform: 'uppercase',
    },
})
