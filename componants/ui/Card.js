import React from 'react'
import { Image, StyleSheet, View, Dimensions, Text } from 'react-native'

export default function Card({ text }) {
    return (
        <View style={[styles.container]}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://placekitten.com/200/600',
                }}
            />
            <Text style={[styles.text]}> {text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: Dimensions.get('window').width * 0.4,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
    },
    text: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})
