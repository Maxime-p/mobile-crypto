import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function CustomButton(
<<<<<<< HEAD
    { text, icon, outlined, link, color, bgColor, style } = {
        icon: false,
        outlined: false,
        color: 'black',
        bgColor: 'white',
    }
=======
    { text, icon, outlined, link, color, bgColor, font, style } =
        { icon: false, outlined: false, color: 'black', bgColor: 'white', font : 16 }
>>>>>>> 97cc6a9754c6d587c968593c03d444c146b8dfbe
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
        <TouchableOpacity onPress={press} style={{...getOutStyle(outlined, color, bgColor), ...style}} >
            <View style={styles.icon}>
                {icon}
            </View>
            <Text style={{...styles.text, color, fontSize: font}}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        marginHorizontal: 8
    },
    text: {
        textTransform: "uppercase",
    }
})
