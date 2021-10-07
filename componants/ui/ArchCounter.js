import React from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'

export default function ArchCounter({ text }) {
    return (
        <View style={[styles.container]}>
            <View style={[styles.nav]}>
                <View style={[styles.gray]}>
                    <Text> 2000 ARCH</Text>
                </View>
                <View style={[styles.red]}>
                    <Text> 99 040</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        width: Dimensions.get('window').width,
    },
    nav: {
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        borderRadius: 16,
        flexDirection: 'row',
    },
    gray: {
        color: '#071D48',
    },
    red: { color: '#F06D76' },
})
