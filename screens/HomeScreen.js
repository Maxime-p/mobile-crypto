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
import CustomBouton from '../componants/ui/CustomButton'

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={{backgroundColor: '#4BC6B9', height: 40}}>
                <ArchCounter/>
            </View>
            <ImageBackground style={styles.header} source={require('../assets/img/home-top.png')}>
                <View style={{width: Dimensions.get('window').width * 0.71, padding: 15}}>
                    <CustomText font={70} color={'white'} fontWeight={'bold'} uppercase>L'arch</CustomText>
                    <CustomText color={'white'} align={'justify'}>
                        Adoptez votre propre animal en voie de disparition et
                        participez à la protection de nombreuses espèces dans le
                        monde.
                    </CustomText>
                </View>
            </ImageBackground>
            <View style={{padding: 20}}>
                <CustomText fontWeight="bold" font={32}>Adoption</CustomText>
                <CustomText>
                    Comment avoir votre propre animal ? Achetez une boîte et regardez quel animal vous allez pouvoir
                    adopter. Commun ou bien légendaire, kangourou ou bien rhinocéros vous pouvez en apprendre plus sur
                    eux, les vendre ou les échanger.
                </CustomText>
            </View>
            <Image
                style={styles.image}
                source={require('../assets/img/box-kang.png')}
            />
            <CustomBouton color="#F06D76">
                <CustomText color={'white'} uppercase>En savoir plus</CustomText>
            </CustomBouton>
            <CustomText fontWeight="bold" uppercase>
                Pack événements
            </CustomText>

            <ScrollView horizontal={true}>
                <View style={{width: Dimensions.get('window').width * 0.5, flex: 1}}>
                    <Image
                        style={styles.packimage}
                        source={require('../assets/img/pack-hallow.png')}
                    />
                    <CustomText align={'center'}>Pack Halloween</CustomText>
                    <CustomBouton
                        outlined
                        style={{width: Dimensions.get('window').width * 0.2}}
                    >
                        <Text>200</Text>
                    </CustomBouton>
                </View>
                <View style={{width: Dimensions.get('window').width * 0.5, flex: 1}}>
                    <Image
                        style={styles.packimage}
                        source={require('../assets/img/pack-asso.png')}
                    />
                    <CustomText align={'center'}>Pack Halloween</CustomText>
                    <CustomBouton
                        outlined
                        style={{width: Dimensions.get('window').width * 0.2}}
                    >
                        <Text>200</Text>
                    </CustomBouton>
                </View>
                <View style={{width: Dimensions.get('window').width * 0.5, flex: 1}}>
                    <Image
                        style={styles.packimage}
                        source={require('../assets/img/pack-hallow.png')}
                    />
                    <CustomText align={'center'}>Pack Halloween</CustomText>
                    <CustomBouton
                        outlined
                        style={{width: Dimensions.get('window').width * 0.2}}
                    >
                        <Text>200</Text>
                    </CustomBouton>
                </View>
            </ScrollView>

            <CustomBouton color="#4BC6B9">
                <CustomText color={'white'} uppercase>En savoir plus</CustomText>
            </CustomBouton>
            <ImageBackground
                style={styles.footer}
                source={require('../assets/img/bg-dark.png')}
            >
                <View
                    style={{
                        paddingTop: Dimensions.get('window').height * 0.4,
                        paddingLeft: 15,
                    }}
                >
                    <CustomText color="white">$48594.458765</CustomText>
                    <CustomText color="white" font={28}>Arch (ARH)</CustomText>
                    <CustomText color="#1ED760">+7,5%</CustomText>
                    <View style={{marginTop: 15}}>
                        <CustomBouton color="#F06D76">
                            <CustomText color={'white'} uppercase>En savoir plus</CustomText>
                        </CustomBouton>
                    </View>
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
        paddingTop: Dimensions.get('window').height * 0.05,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.5,
    },
    packimage: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.2,
        padding: 10,
    },
    footer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.8,
    },
})
