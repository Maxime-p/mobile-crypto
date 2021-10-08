import React from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import CustomText from '../../componants/ui/CustomText.js'
import CoinBlack from "../../assets/icons/CoinBlack";
import Dollar from "../../assets/icons/Dollar";

export default function ArchCounter({ text }) {
    return (
        <View style={[styles.container]}>
            <View style={[styles.nav]}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <CoinBlack
                        width={20}
                        height={20}
                        marginRight={8}
                    />
                    <CustomText fontWeight={'bold'} font={14}>
                        2000 ARCH
                    </CustomText>
                </View>
                <View style={[styles.red]}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Dollar
                            width={20}
                            height={20}
                            marginRight={8}
                        />
                        <CustomText
                            fontWeight={'bold'}
                            color="#F06D76"
                            font={14}
                        >
                            99040
                        </CustomText>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    nav: {
        paddingHorizontal: 16,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        borderRadius: 16,
        flexDirection: 'row',
        paddingVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        elevation: 8,
    },
    gray: {
        color: '#071D48',
        flexDirection: 'column',
    },
    red: { color: '#F06D76' },
})
