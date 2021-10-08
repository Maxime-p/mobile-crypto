import React from 'react'
import { Modal, StyleSheet, View, Dimensions } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
export default function CustomModal({ children, handleSwipeDown }) {
    return (
        <GestureRecognizer style={{ flex: 1 }} onSwipeDown={handleSwipeDown}>
            <Modal animationType="slide" transparent={true} visible={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>{children}</View>
                </View>
            </Modal>
        </GestureRecognizer>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },
    modalView: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.9,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
        alignItems: 'center',
    },
})
