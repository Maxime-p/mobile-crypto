import React, { useState } from 'react'
import {
    ScrollView,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native'
import CustomText from '../componants/ui/CustomText'
import BlackScreen from '../componants/ui/BlackScreen.js'
import Up from '../assets/icons/Up'
import Down from '../assets/icons/Down'
import Coin from '../assets/icons/Coin'
import BezierLineChart from '../componants/chart/BezierLineChart'
import GestureRecognizer from 'react-native-swipe-gestures'
import CustomButton from '../componants/ui/CustomButton'
import Swap from '../assets/icons/Swap'

export default function WalletScreen() {
    const [modalVisibility, setModalVisibility] = useState(false)

    const handleSwipeDown = () => {
        setModalVisibility(false)
    }

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../assets/img/bg-lines.png')}
                style={styles.bg}
            />
            <Down color={'#1ED760'} />

            <View style={styles.content}>
                <CustomText font={24} fontWeight={'bold'} style={styles.title}>
                    Portefeuille
                </CustomText>
                <CustomText font={14} fontWeight={'700'} uppercase>
                    Vos devises
                </CustomText>

                <View style={styles.card}>
                    <View style={styles.header}>
                        <CustomText
                            font={20}
                            fontWeight={'500'}
                            color={'white'}
                        >
                            Arch
                        </CustomText>
                        <CustomText
                            font={28}
                            fontWeight={'700'}
                            color={'white'}
                        >
                            654 ARH
                        </CustomText>
                    </View>
                    <View style={styles.cardContent}>
                        <View style={styles.evolution}>
                            <CustomText
                                font={14}
                                fontWeight={'500'}
                                color={'#F06D76'}
                            >
                                $12.38
                            </CustomText>
                            <Up style={styles.icon} color={'#1ED760'} />
                            <CustomText
                                font={14}
                                fontWeight={'500'}
                                color={'#1ED760'}
                            >
                                +7,5%
                            </CustomText>
                        </View>
                        <CustomText
                            font={14}
                            fontWeight={'700'}
                            color={'#F06D76'}
                        >
                            $8 096.52
                        </CustomText>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.header}>
                        <CustomText
                            font={20}
                            fontWeight={'500'}
                            color={'white'}
                        >
                            Ethereum
                        </CustomText>
                        <CustomText
                            font={28}
                            fontWeight={'700'}
                            color={'white'}
                        >
                            13.27 ETH
                        </CustomText>
                    </View>
                    <View style={styles.cardContent}>
                        <View style={styles.evolution}>
                            <CustomText
                                font={14}
                                fontWeight={'500'}
                                color={'#F06D76'}
                            >
                                $3 375.25
                            </CustomText>
                            <Down style={styles.icon} color={'#1ED760'} />
                            <CustomText
                                font={14}
                                fontWeight={'500'}
                                color={'#071D48'}
                            >
                                -2,47%
                            </CustomText>
                        </View>
                        <CustomText
                            font={14}
                            fontWeight={'700'}
                            color={'#F06D76'}
                        >
                            $44 789.5675
                        </CustomText>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.getArch}
                    onPress={() => setModalVisibility(true)}
                >
                    <View style={styles.buttonIcon}>
                        <Coin color={'#FFF'} />
                    </View>
                    <CustomText color={'#FFF'}>Obtenir de l’arch</CustomText>
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
                                        <View style={styles.line} />
                                        <CustomText
                                            font={24}
                                            fontWeight={'bold'}
                                        >
                                            Swap de crypto
                                        </CustomText>
                                        <CustomText
                                            font={20}
                                            fontWeight={'500'}
                                            align={'center'}
                                        >
                                            1 ETH ≈ 272.63 ARC{' '}
                                        </CustomText>
                                        <CustomButton
                                            style={styles.swap}
                                            text={'SWAP'}
                                            color={'white'}
                                            bgColor={'#F06D76'}
                                            icon={<Swap color={'white'} />}
                                        />
                                    </View>
                                </View>
                            </Modal>
                        </GestureRecognizer>
                    </TouchableWithoutFeedback>
                )}

                <CustomText font={14} fontWeight={'700'} uppercase>
                    Évolution de sa valeur
                </CustomText>
                <CustomText font={14} fontWeight={'500'} color={'#6D697C'}>
                    Prix de L’Arch (ARH) en $
                </CustomText>
                <BezierLineChart />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAF9F6',
        flex: 1,
        width: Dimensions.get('window').width,
    },
    content: {
        paddingVertical: 32,
        paddingHorizontal: 20,
    },
    bg: {
        position: 'absolute',
        top: 0,
        width: Dimensions.get('window').width * 1.4,
    },
    title: {
        marginBottom: 24,
    },
    card: {
        marginVertical: 7,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4BC6B9',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    evolution: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 10,
        height: 10,
        marginLeft: 4,
    },
    getArch: {
        marginTop: 24,
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#F06D76',
    },
    buttonIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        marginRight: 8,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },
    modalView: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.6,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
        paddingHorizontal: 20,
    },
    line: {
        width: 56,
        height: 6,
        borderRadius: 27,
        backgroundColor: 'black',
        alignSelf: 'center',
        marginBottom: 32,
    },
    swap: {
        marginTop: 32,
    },
})
