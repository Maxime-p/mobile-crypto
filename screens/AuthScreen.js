import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import image from '../assets/auth.png'

export default function AuthScreen({ navigation }) {
    const press = () => {
        navigation.navigate('App')
    }
    return (
        <View style={styles.container}>
            <Image source={image} style={image} />
            <View style={styles.content}>
                <Text>Bienvenue sur l’Arch</Text>
                <TouchableOpacity style={styles.button} onPress={press}>
                    <Text> IMPORTER SON PORTEFEUILLE </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outlinedbutton} onPress={press}>
                    <Text> CRÉER UN PORTEFEUILLE </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    image: {
        flex: 1,
    },

    content: {
        position: 'absolute',
        bottom: 20,
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#F06D76',
        padding: 10,
        borderRadius: 8,
    },
    outlinedbutton: {
        borderRadius: 8,

        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#071D48',
    },
})
