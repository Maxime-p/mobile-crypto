import React from 'react'
import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import ArchCounter from '../componants/ui/ArchCounter.js'
import CustomButton from '../componants/ui/CustomButton.js'
import CustomText from '../componants/ui/CustomText.js'
import Pack from '../componants/ui/Pack.js'
import Coin from '../assets/icons/Coin.js'

export default function AdoptionScreen() {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Image
                style={{
                    position: 'absolute',
                    bottom: Dimensions.get('window').width * -0.4,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height * 0.6,
                }}
                source={require('../assets/img/union.png')}
            />
            <ArchCounter />
            <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                <CustomText fontWeight="bold" font={24}>
                    Adoption
                </CustomText>
                <View style={styles.container}>
                    <Image
                        style={styles.mainPack}
                        source={require('../assets/img/pack.png')}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ color: 'white', paddingHorizontal: 4 }}>
                            ACHETER UNE CAISSE
                        </Text>

                        <Coin fill="#071D48" height={20} width={20} />
                        <Text
                            style={{ color: '#071D48', paddingHorizontal: 4 }}
                        >
                            200{' '}
                        </Text>
                    </View>
                </TouchableOpacity>
                <CustomText
                    fontWeight="bold"
                    uppercase
                    style={{
                        marginTop: Dimensions.get('window').height * 0.02,
                    }}
                >
                    Pack événements
                </CustomText>
                <Pack />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    mainPack: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.4,
    },
    button: {
        backgroundColor: '#F06D76',
        padding: 10,
        borderRadius: 8,
    },
})
