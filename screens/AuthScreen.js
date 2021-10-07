import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native'
import {useAssets} from "expo-asset";
import {useFonts} from "expo-font";
import CustomButton from "../componants/Button";
import Import from "../assets/icons/Import";
import Wallet from "../assets/icons/Wallet";

export default function AuthScreen({ navigation }) {
    const [isAssetsLoaded] = useAssets([
        require('../assets/img/auth.png'),
        require('../assets/img/bg-dark.png'),
        require('../assets/img/box-kang.png'),
        require('../assets/img/home-top.png'),
        require('../assets/img/pack-asso.png'),
        require('../assets/img/pack-hallow.png'),
    ])

    const [isFontsLoaded] = useFonts({
        Raleway: require('../assets/fonts/Raleway/Raleway-Bold.ttf'),
        HelveticaNeue: require('../assets/fonts/HelveticaNeue/HelveticaNeue.ttf'),
        HelveticaNeueMedium: require('../assets/fonts/HelveticaNeue/HelveticaNeue-Medium.ttf'),
        HelveticaNeueBold: require('../assets/fonts/HelveticaNeue/HelveticaNeue-Bold.ttf'),
    });


    const press = () => {
        navigation.navigate('App')
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/auth.png')} style={styles.image} />
            <View style={styles.content}>
                {!isAssetsLoaded && !isFontsLoaded ?
                    <Text>Loading</Text>
                    :
                    <View>
                        <Text>Bienvenue sur l’Arch</Text>
                        <CustomButton text={'Importer son portefeuille'} icon={<Import color={'#FFF'}/>} color={'#FFF'} bgColor={'#F06D76'} link={'App'} />
                        <CustomButton outlined={true} text={'Créer un portefeuille'} icon={<Wallet color={'#071D48'}/>} color={'#071D48'} link={'App'} />
                    </View>
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    image: {
        width: Dimensions.get('window').width,
        flex: 1,
    },

    content: {
        position: 'absolute',
        bottom: 20,
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
    },
    outlinedbutton: {
        borderRadius: 8,
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#071D48',
    },
})
