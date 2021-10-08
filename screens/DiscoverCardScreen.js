import {
    View,
    Image,
    StyleSheet,
    Text,
    Dimensions,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground,
} from 'react-native'
import CustomButton from '../componants/ui/CustomButton.js'
import CustomText from '../componants/ui/CustomText.js'
import Info from '../assets/icons/Info.js'
import DL from '../assets/icons/Import.js'
// import Share from '../assets/icons/'
import BlackScreen from '../componants/ui/BlackScreen.js'
import React, { useEffect, useState } from 'react'

import GestureRecognizer from 'react-native-swipe-gestures'

export default function Discover({ navigation }) {
    const [modalVisibility, setModalVisibility] = useState(false)

    const handleSwipeDown = () => {
        setModalVisibility(false)
    }

    return (
        <View style={styles.container}>
            <Image
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: Dimensions.get('window').width * 0.5,
                    height: Dimensions.get('window').height * 0.5,
                }}
                source={require('../assets/img/project/top.png')}
            />
            <Image
                style={{
                    position: 'absolute',
                    bottom: Dimensions.get('window').width * -0.2,
                    right: 0,
                    width: Dimensions.get('window').width * 0.5,
                    height: Dimensions.get('window').height * 0.7,
                }}
                source={require('../assets/img/project/bottom.png')}
            />

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/img/Card/Animals-5.png')}
                />
            </View>

            <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisibility(true)}
            >
                <CustomText color={'#071D48'} font={16}>
                    PLUS D'INFO SUR L'ANIMAL
                </CustomText>
            </TouchableOpacity>
            {modalVisibility && <BlackScreen />}
            {modalVisibility && (
                <TouchableWithoutFeedback>
                    <GestureRecognizer
                        style={{ flex: 1 }}
                        onSwipeDown={handleSwipeDown}
                    >
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={true}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <View style={styles.line}></View>
                                    <View
                                        style={{
                                            borderTopEndRadius: 16,
                                            borderTopStartRadius: 16,
                                            borderRadius: 8,
                                        }}
                                    >
                                        <Image
                                            style={styles.bg}
                                            source={require('../assets/img/animal-modale.png')}
                                        ></Image>

                                        <View
                                            style={{
                                                paddingHorizontal: 20,
                                                paddingVertical: 20,
                                            }}
                                        >
                                            <CustomText
                                                fontFamily="Raleway"
                                                fontWeight="bold"
                                                font={14}
                                            >
                                                VALEUR ACTUELLE
                                            </CustomText>
                                            <CustomText
                                                color="#071D48"
                                                fontWeight="bold"
                                                font={28}
                                            >
                                                30
                                            </CustomText>

                                            <Text
                                                style={{
                                                    textAlign: 'right',
                                                    fontSize: 14,
                                                    color: '#B0ABBB',
                                                }}
                                            >
                                                les 30 derniers jours
                                            </Text>
                                        </View>

                                        <Image
                                            style={styles.chart}
                                            source={require('../assets/img/price_chart.png')}
                                        ></Image>
                                        <View
                                            style={{
                                                paddingHorizontal: 20,
                                                paddingVertical: 20,
                                            }}
                                        >
                                            <CustomButton
                                                color="white"
                                                bgColor="#F06D76"
                                                text="telecharger"
                                                icon={<DL color={'#FFF'} />}
                                            />
                                            <View style={{ marginTop: 15 }}>
                                                <CustomButton
                                                    outlined
                                                    text="partager"
                                                    icon={<DL color={'#FFF'} />}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </GestureRecognizer>
                </TouchableWithoutFeedback>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        width: Dimensions.get('window').width,
    },
    imageContainer: {
        height: Dimensions.get('window').height,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    image: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.5,
        alignSelf: 'center',
    },
    modalButton: {
        marginTop: 24,
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 16,
        height: 75,
        borderWidth: 1,
        borderColor: '#071D48',
    },
    icon: {
        marginTop: 2,
        marginLeft: 5,
        marginRight: 2,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },

    line: {
        position: 'absolute',
        zIndex: 1,
        top: 8,
        width: 56,
        height: 6,
        borderRadius: 27,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginBottom: 32,
    },

    modalView: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.95,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
    },
    bg: {
        height: Dimensions.get('window').height * 0.3,
        width: Dimensions.get('window').width * 1,

        borderRadius: 16,
    },
    chart: {
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.15,
    },
})
