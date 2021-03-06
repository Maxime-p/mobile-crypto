import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Box from "../../assets/icons/Box";

export const TabBarAdvancedButton = ({...props}) => (
    <View
        style={styles.container}
        pointerEvents="box-none"
    >
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress}>
            <Box color='#FFF' width={32} height={32}/>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 75,
        alignItems: 'center'
    },
    button: {
        top: -22.5,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: 62,
        height: 62,
        borderRadius: 31,
        backgroundColor: '#F06D76',
    }
});
