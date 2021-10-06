import React, {useState} from "react";
import {StyleSheet, SafeAreaView, Platform, Text, Dimensions} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Constants from 'expo-constants';

import Nav from "./componants/Nav";
import AuthScreen from "./screens/AuthScreen";

export default function App() {
    const [isAuth, setIsAuth] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            {!isAuth ?
                <AuthScreen />
                :
                <NavigationContainer>
                    <Nav style={styles.nav}/>
                </NavigationContainer>
            }


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    },
    nav: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: Dimensions.get('window').width
    }
});
