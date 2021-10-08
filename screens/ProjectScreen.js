import React from 'react'
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Image,
} from 'react-native'
import ArchCounter from '../componants/ui/ArchCounter'
import CustomText from '../componants/ui/CustomText'

export default function ProjectScreen() {
    return (
        <View>
            <ArchCounter />
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Image
                    style={styles.bg}
                    source={require('../assets/img/project/Union.png')}
                />
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
                        bottom: Dimensions.get('window').width * -0.8,
                        right: 0,
                        width: Dimensions.get('window').width * 0.5,
                        height: Dimensions.get('window').height * 0.7,
                    }}
                    source={require('../assets/img/project/bottom.png')}
                />

                <View style={{ padding: 20 }}>
                    <CustomText font={24} fontWeight="bold" style={{marginBottom: 24}}>
                        Notre Project
                    </CustomText>
                    <CustomText font={14} fontFamily="Raleway" fontWeight="bold" uppercase style={{marginBottom: 16}}>
                        Nos origines
                    </CustomText>

                    <CustomText font={16} fontWeight="bold" align={"center"}>
                        Tout est parti de quelques chiffres :
                    </CustomText>
                    <View style={styles.container}>
                        <View style={styles.frame}>
                            <View style={styles.shadow}>
                                <Text style={styles.number}>2</Text>
                                <Text style={styles.sentance}>
                                    Espèces de vertébrés éteintes chaque année
                                </Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.Paragraph}>
                        Après avoir pris conscience de la situation alarmante des
                        animaux à travers le globe, nous avons décidé de créer le
                        projet
                        <Text style={{ color: '#F06D76', fontWeight: 'bold' }}>
                            &#160;Arch&#160;
                        </Text>
                        pour soutenir la protection animalière.
                    </Text>

                    <CustomText fontFamily="Raleway" fontWeight="bold" font={14} uppercase style={{marginTop: 40}}>
                        Comment notre projet aide-t-il ?
                    </CustomText>
                    <View style={styles.container}>
                        <View style={styles.frame}>
                            <View style={styles.shadow}>
                                <CustomText color="#F06D76" font={20} style={{marginBottom: 24}}>
                                    Des balises de traçage des animaux
                                </CustomText>
                                <CustomText color="#071D48" style={{lineHeight: 24}}>
                                    Chaque animal recueilli dans votre refuge numérique
                                    permet de financer des balises Argos. Ces balises
                                    permettent de suivre des animaux d’espèces menacés
                                    afin d’essayer d’éviter leur extinction.
                                </CustomText>
                            </View>
                        </View>
                    </View>

                    <CustomText
                        fontFamily="Raleway"
                        fontWeight="bold"
                        uppercase
                        style={{marginTop: 40, marginBottom: 24}}
                    >
                        Des NFT pour la cause animale !
                    </CustomText>

                    <Text>
                        Le projet
                        <Text style={{ color: '#F06D76', fontWeight: 'bold' }}>
                            &#160;Arch&#160;
                        </Text>
                        vous propose d’investir pour défendre l’avenir des animaux
                        menacés !
                    </Text>

                    <Image style={styles.rino} source={require('../assets/img/rino.png')} />

                    <Text style={styles.Paragraph}>
                        Tous nos NFT sont associés à des espèces menacées, et nous
                        déterminons leur rareté selon la liste rouge de l’UICN. Ils
                        sont classifiés en cinq niveaux :
                    </Text>
                </View>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={require('../assets/img/project/rarity.png')}
                    />
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={styles.Paragraph}>
                        Le niveau de rareté du NFT est représenté par la pastille et
                        la couleur de son arrière-plan.
                    </Text>
                    <Text style={styles.Paragraph}>
                        Nous avons fait ce choix pour faciliter leur échange sur des
                        plateformes comme Opensea ou Rarible, mais les propriétaires
                        peuvent à travers notre application les exporter sans ces
                        éléments avec un fond de leur choix !
                    </Text>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignSelf: 'center' },
    frame: {
        width: Dimensions.get('window').width * 0.7,
        marginVertical: 24,
        borderRadius: 8
    },
    shadow: {
        borderRadius: 8,
        padding: 20,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        elevation: 8,
    },
    number: {
        fontSize: 56,
        color: '#F06D76',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sentance: { fontSize: 20, color: '#6D697C', textAlign: 'center' },
    Paragraph: {
        color: '#6D697C',
        paddingVertical: 10,
        textAlign: 'justify',
        fontSize: 16,
    },
    image: {
        width: Dimensions.get('window').width,
        height: 70,
    },
    bg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.8,
        position: 'absolute',
        top: Dimensions.get('window').height * 0.2,
        right: 0,
        bottom: 0,
        left: 0,
    },
    rino: {
        width: 339,
        height: 188,
        alignSelf: "center",
        marginVertical: 24
    },
    marginVerticale: { marginVertical: 10 },
})
