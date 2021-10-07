import React from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import Coin from '../../assets/icons/Coin'
import Etherum from '../../assets/icons/Wallet'
import CustomText from '../../componants/ui/CustomText.js'

export default function ArchCounter({ text }) {
    return (
        <View style={[styles.container]}>
            <View style={[styles.nav]}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Coin
                        fill="#071D48"
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
                        <Coin
                            fill="#F06D76"
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
        paddingHorizontal: 10,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        borderRadius: 16,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    gray: {
        color: '#071D48',
        flexDirection: 'column',
    },
    red: { color: '#F06D76' },
})
