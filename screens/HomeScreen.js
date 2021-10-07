import React from 'react'
import {
    ScrollView,
    Image,
    Text,
    View,
    Button,
    StyleSheet,
    Dimensions,
} from 'react-native'

import Card from '../componants/ui/Card.js'
export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={[styles.header]}>
                <Text style={[styles.title]}>Notre projet</Text>
                <Text style={[styles.subtitle]}>
                    Adoptez votre propre animal en voix de disparition et
                    participez à la protection de nombreuses espèces dans le
                    monde.
                </Text>

                {/* <Button color="#fff" title="En savoir plus"></Button> */}
            </View>

            <View style={[styles.content]}>
                <Text style={[styles.sectionTitle]}>Adoption</Text>
                <Text style={[styles.mainText]}>
                    Comment avoir votre propre animal ? Achetez une boîte et
                    regardez quel animal vous allez pouvoir adopter. Commun ou
                    bien légendaire, kangourou ou bien rhinocéros vous pouvez en
                    apprendre plus sur eux, les vendre ou les échanger.
                </Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://placekitten.com/600/300',
                    }}
                />
                <Button style="" title="en savoir plus">
                    {' '}
                </Button>
                <Text style={[styles.sectionTitle]}>Pack evenement</Text>
            </View>
            <View horizontal style={[styles.flex]}>
                <Card text="Box Halloween"></Card>
                <Card text="Box LPO ui"></Card>
            </View>

            <View style={[styles.footer]}>
                <Text>$48594.458765</Text>
                <Text>Arch (ARH)</Text>
                <Text>+58%</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
        backgroundColor: 'red',

        height: Dimensions.get('window').height * 0.5,
        width: Dimensions.get('window').width,
        paddingTop: Dimensions.get('window').height * 0.3,
    },
    footer: {
        marginTop: Dimensions.get('window').height * 0.04,
        height: Dimensions.get('window').height * 0.2,
        paddingTop: Dimensions.get('window').height * 0.3,

        backgroundColor: 'red',
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
    },
    flex: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#ecf0f1',
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 15,
        marginRight: 15,
        color: '#fff',
        fontSize: 28,
    },
    subtitle: {
        marginLeft: 15,
        marginRight: 15,
        paddingTop: Dimensions.get('window').height * 0.02,

        color: '#fff',
    },
    content: {
        marginLeft: 15,
        marginRight: 15,
    },
    sectionTitle: {
        paddingTop: Dimensions.get('window').height * 0.05,
        fontSize: 28,
    },
    image: {
        marginTop: 20,
        height: Dimensions.get('window').height * 0.2,
        borderRadius: 16,
    },
    mainText: {
        fontSize: 12,
        textAlign: 'justify',
    },
})
