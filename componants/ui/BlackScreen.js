import React from 'react'
import { Image, StyleSheet, View, Dimensions, Text, Modal } from 'react-native'

export default function BlackScreen() {
    return (
        <Modal animationType="none" transparent={true} visible={true}>
            <View style={styles.BlackScreen}/>
        </Modal>
    )
}

const styles = StyleSheet.create({
    BlackScreen: {
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
    },
})
