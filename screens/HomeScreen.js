import React from 'react'
import {
    ScrollView,
    Image,
    Text,
    View,
    Button,
    StyleSheet,
    Dimensions,
    ImageBackground,
} from 'react-native'
import ArchCounter from '../componants/ui/ArchCounter'
import CustomText from '../componants/ui/CustomText'
import CustomButton from '../componants/ui/CustomButton'
import Pack from '../componants/ui/Pack'

import Coin from '../assets/icons/Coin'
import Info from '../assets/icons/Info'
import Box from '../assets/icons/Box'

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={{ backgroundColor: '#4BC6B9', height: 60 }}>
                <ArchCounter />
            </View>
            <ImageBackground
                style={styles.header}
                source={require('../assets/img/home-top.png')}
            >
                <View
                    style={{
                        width: Dimensions.get('window').width * 0.8,
                        paddingHorizontal: 20,
                    }}
                >
                    <CustomText
                        font={70}
                        color={'white'}
                        fontWeight={'bold'}
                        uppercase
                    >
                        L'arch
                    </CustomText>
                    <CustomText
                        style={{ paddingVertical: 10, paddingRight: 30 }}
                        color={'white'}
                        font={16}
                        align={'justify'}
                    >
                        Adoptez votre propre animal en voie de disparition et
                        participez à la protection de nombreuses espèces dans le
                        monde.
                    </CustomText>
                    <CustomButton
                        style={{
                            height: Dimensions.get('window').height * 0.05,
                            width: Dimensions.get('window').width * 0.5,
                            textAlign: 'center',
                        }}
                        color="white"
                        bgColor="#071D48"
                        text="EN SAVOIR PLUS"
                        link="Project"
                        icon={<Info color={'white'} />}
                    />
                </View>
            </ImageBackground>
            <View
                style={{
                    paddingHorizontal: 20,
                    marginTop: Dimensions.get('window').height * -0.05,
                }}
            >
                <CustomText fontWeight="bold" font={32}>
                    Adoption
                </CustomText>
                <CustomText font={16} style={{lineHeight: 24}}>
                    Comment avoir votre propre animal ? Achetez une boîte et
                    regardez quel animal vous allez pouvoir adopter. Commun ou
                    bien légendaire, kangourou ou bien rhinocéros vous pouvez en
                    apprendre plus sur eux, les vendre ou les échanger.
                </CustomText>
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={require('../assets/img/box-kang.png')}
                    />
                </View>
            </View>
            <View style={{ marginTop: 30,paddingHorizontal: 20 }}>
                <CustomButton
                    style={{
                        height: Dimensions.get('window').height * 0.05,
                        textAlign: 'center',
                        marginTop: Dimensions.get('window').height * 0.26,
                    }}
                    color="white"
                    link="Adoption"
                    bgColor="#F06D76"
                    text="EN SAVOIR PLUS"
                    icon={<Info color={'white'} />}
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
            </View>

            <Pack />
            <CustomButton
                style={{
                    height: Dimensions.get('window').height * 0.08,
                    textAlign: 'center',
                    marginTop: Dimensions.get('window').height * 0.03,
                    marginHorizontal: 20,
                }}
                link="Adoption"
                color="white"
                bgColor="#4BC6B9"
                text="EN SAVOIR PLUS"
                icon={<Box color={'white'} />}
            />
            <ImageBackground
                style={styles.footer}
                source={require('../assets/img/bg-dark.png')}
            >
                <View
                    style={{
                        paddingTop: Dimensions.get('window').height * 0.2,
                        paddingHorizontal: 20,
                    }}
                >
                    <CustomText color="white">$48594.458765</CustomText>
                    <CustomText color="white" font={28}>
                        Arch (ARH)
                    </CustomText>
                    <CustomText color="#1ED760">+7,5%</CustomText>
                    <CustomButton
                        style={{
                            height: Dimensions.get('window').height * 0.08,
                            textAlign: 'center',
                            marginTop: Dimensions.get('window').height * 0.03,
                        }}
                        color="white"
                        bgColor="#F06D76"
                        link="Wallet"
                        text="EN SAVOIR PLUS"
                        icon={<Info color={'white'} />}
                    />
                </View>
            </ImageBackground>
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
        bottom: Dimensions.get('window').height * -0.32,
        flex: 1,
        height: Dimensions.get('window').height * 0.3,
        position: 'absolute',
        right: 0,
        width: '100%',
    },
    packimage: {
        width: Dimensions.get('window').width * 0.5,
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
