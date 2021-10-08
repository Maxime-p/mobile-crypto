import React from 'react'
import {
    Button,
    Dimensions,
    Image,
    ScrollView,
    Text,
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native'
import ArchCounter from '../componants/ui/ArchCounter.js'
import CustomButton from '../componants/ui/CustomButton.js'
import CustomText from '../componants/ui/CustomText.js'
import Pack from '../componants/ui/Pack.js'

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

                <CustomButton
                    color="white"
                    bgColor="#F06D76"
                    text="ACHETER UNE CAISSE"
                />
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
})
