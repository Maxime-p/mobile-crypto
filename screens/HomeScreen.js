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
import CustomTitle from '../componants/ui/Title.js'
import CustomBouton from '../componants/Button.js'
export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={{ backgroundColor: '#4BC6B9', height: 40 }}>
                <ArchCounter />
            </View>

            <ImageBackground
                style={styles.header}
                source={require('../assets/img/home-top.png')}
            >
                <View
                    style={{
                        width: Dimensions.get('window').width * 0.71,
                        padding: 15,
                    }}
                >
                    <Text style={styles.appName}>L'ARCH</Text>
                    <Text style={{ color: 'white', textAlign: 'justify' }}>
                        Adoptez votre propre animal en voie de disparition et
                        participez à la protection de nombreuses espèces dans le
                        monde.
                    </Text>
                </View>
            </ImageBackground>
            <View style={{ padding: 20 }}>
                <CustomTitle
                    text="Adoption"
                    fontWeight="bold"
                    font={32}
                ></CustomTitle>
                <CustomTitle
                    fontWeight="regular"
                    text="Comment avoir votre propre animal ? Achetez une boîte et regardez quel animal vous allez pouvoir adopter. Commun ou bien légendaire, kangourou ou bien rhinocéros vous pouvez en apprendre plus sur eux, les vendre ou les échanger."
                ></CustomTitle>
            </View>
            <Image
                style={styles.image}
                source={require('../assets/img/box-kang.png')}
            ></Image>
            <CustomBouton color="#F06D76">
                <Text style={{ color: 'white' }}>EN SAVOIR PLUS</Text>
            </CustomBouton>
            <CustomTitle text="PACK EVENEMENTS" fontWeight="bold"></CustomTitle>

            <ScrollView horizontal={true}>
                <View
                    style={{
                        width: Dimensions.get('window').width * 0.5,
                        flex: 1,
                    }}
                >
                    <Image
                        style={styles.packimage}
                        source={require('../assets/img/pack-hallow.png')}
                    ></Image>
                    <Text style={{ textAlign: 'center' }}>Pack Halloween </Text>
                    <CustomBouton
                        outlined
                        style={{ width: Dimensions.get('window').width * 0.2 }}
                    >
                        <Text>200</Text>
                    </CustomBouton>
                </View>
                <View
                    style={{
                        width: Dimensions.get('window').width * 0.5,
                        flex: 1,
                    }}
                >
                    <Image
                        style={styles.packimage}
                        source={require('../assets/img/pack-asso.png')}
                    ></Image>
                    <Text style={{ textAlign: 'center' }}>Pack Halloween </Text>
                    <CustomBouton
                        outlined
                        style={{ width: Dimensions.get('window').width * 0.2 }}
                    >
                        <Text>200</Text>
                    </CustomBouton>
                </View>
                <View
                    style={{
                        width: Dimensions.get('window').width * 0.5,
                        flex: 1,
                    }}
                >
                    <Image
                        style={styles.packimage}
                        source={require('../assets/img/pack-hallow.png')}
                    ></Image>
                    <Text style={{ textAlign: 'center' }}>Pack Halloween </Text>
                    <CustomBouton
                        outlined
                        style={{ width: Dimensions.get('window').width * 0.2 }}
                    >
                        <Text>200</Text>
                    </CustomBouton>
                </View>
            </ScrollView>

            <CustomBouton color="#4BC6B9">
                <Text style={{ color: 'white' }}>EN SAVOIR PLUS</Text>
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
                    <CustomTitle
                        color="white"
                        text="$48594.458765"
                    ></CustomTitle>
                    <CustomTitle
                        color="white"
                        font={28}
                        text="Arch (ARH)"
                    ></CustomTitle>
                    <CustomTitle color="#1ED760" text="+7,5%"></CustomTitle>
                    <View style={{ marginTop: 15 }}>
                        <CustomBouton color="#F06D76">
                            <Text style={{ color: 'white' }}>
                                EN SAVOIR PLUS
                            </Text>
                        </CustomBouton>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    appName: {
        color: 'white',
        fontSize: 70,
        fontWeight: 'bold',
    },

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
