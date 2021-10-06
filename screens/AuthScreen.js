import React from "react";
import {View, Image, StyleSheet, Text, Button, Alert, Dimensions} from "react-native";
import image from '../assets/auth.png'

export default function AuthScreen({}) {
    return (
        <View style={styles.container}>
            <Image source={image} style={image}/>
            <View style={styles.content}>
                <Text>Bienvenue sur l’Arch</Text>
                <Button title={"Importer son portefeuille "} onPress={Alert.alert('setIsAuth to true')}/>
                <Button title={"CRÉER UN PORTEFEUILLE "} onPress={Alert.alert('setIsAuth to true')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
    },
    image: {
        flex: 1
    },
    content: {
        position: "absolute",
        bottom: 20,
        width: Dimensions.get('window').width,
        paddingHorizontal: 20
    }
});
