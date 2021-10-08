import React from 'react'
import {
    Text,
    ScrollView,
    View,
    Dimensions,
    Image,
    StyleSheet,
} from 'react-native'
import Coin from '../../assets/icons/Coin.js'

import CustomText from './CustomText.js'
import CustomButton from './CustomButton.js'

export default function pack() {
    return (
        <ScrollView horizontal={true}>
            <View
                style={{
                    width: Dimensions.get('window').width * 0.4,
                    flex: 1,
                }}
            >
                <Image
                    style={styles.packimage}
                    source={require('../../assets/img/pack-hallow.png')}
                />
                <CustomText align={'center'}>Pack Halloween</CustomText>
                <CustomButton
                    outlined
                    text="200"
                    color="#071D48"
                    icon={<Coin color={'#071D48'} />}
                    style={styles.boxButton}
                />
            </View>
            <View
                style={{
                    width: Dimensions.get('window').width * 0.4,
                    flex: 1,
                }}
            >
                <Image
                    style={styles.packimage}
                    source={require('../../assets/img/pack-asso.png')}
                />
                <CustomText align={'center'}>Pack Association LPO
                </CustomText>
                <CustomButton
                    outlined
                    text="200"
                    color="#071D48"
                    icon={<Coin color={'#071D48'} />}
                    style={styles.boxButton}
                />
            </View>
            <View
                style={{
                    width: Dimensions.get('window').width * 0.4,
                    flex: 1,
                }}
            >
                <Image
                    style={styles.packimage}
                    source={require('../../assets/img/pack-hallow.png')}
                />
                <CustomText align={'center'}>Pack Halloween</CustomText>
                <CustomButton
                    outlined
                    text="200"
                    color="#071D48"
                    icon={<Coin color={'#071D48'} />}
                    style={styles.boxButton}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF9F6',
        width: Dimensions.get('window').width,
    },
    header: {
        backgroundColor: '#4BC6B9',
        height: Dimensions.get('window').height * 0.5,
        width: Dimensions.get('window').width,
    },
    image: {
        flex: 1,
        height: null,
        width: null,
    },
    imageContainer: {
        bottom: Dimensions.get('window').height * -0.28,
        flex: 1,
        height: Dimensions.get('window').height * 0.3,
        position: 'absolute',
        right: 0,
        width: '100%',
    },
    packimage: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.2,
        padding: 10,
    },
    footer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.5,
    },
    boxButton: {
        height: Dimensions.get('window').height * 0.06,
        textAlign: 'center',
        marginHorizontal: 20,
    },
})
