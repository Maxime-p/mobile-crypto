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
import CustomButton from "../componants/ui/CustomButton";
import Import from "../assets/icons/Import";
import Wallet from "../assets/icons/Wallet";
import CustomText from "../componants/ui/CustomText";

export default function AuthScreen({ navigation }) {
    const [isAssetsLoaded] = useAssets([
        require('../assets/img/auth.png'),
        require('../assets/img/loader.gif'),
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

    const Loader = () => {
        if (!isAssetsLoaded && !isFontsLoaded){
            return (<Image source={require('../assets/img/loader.gif')} />)
        }else{
            return (
                <View>
                    <CustomText font={32} fontWeight={'bold'} align={'center'}>Bienvenue sur l’Arch</CustomText>
                    <CustomButton text={'Importer un portefeuille'} icon={<Import color={'#FFF'}/>} color={'#FFF'} bgColor={'#F06D76'} link={'App'} style={styles.middleButton} />
                    <CustomButton outlined={true} text={'Créer un portefeuille'} icon={<Wallet color={'#071D48'}/>} color={'#071D48'} link={'App'} />
                </View>
            )
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/auth.png')} style={styles.image} />
            <View style={styles.content}>
                <Loader/>
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
    },
    middleButton: {
        marginTop: 40,
        marginBottom: 16
    }
})
