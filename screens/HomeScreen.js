import React, { useState } from 'react'
import { Button, Text, Pressable, View, StyleSheet } from 'react-native'
import CustomModal from '../componants/Modal.js'

export default function HomeScreen({ navigation }) {
    const [modalVisibility, setModalVisibility] = useState(false)

    return (
        <View>
            <Button
                title="Go to AdoptionScreen"
                onPress={() => navigation.push('AdoptionScreen')}
            />
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisibility(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
            {modalVisibility && (
                <CustomModal textButton="lol" mainText="Text" />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
})
