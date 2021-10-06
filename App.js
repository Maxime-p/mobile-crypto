import React from "react";
import {StyleSheet, SafeAreaView, Platform, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Constants from 'expo-constants';

import HomeScreen from "./screens/HomeScreen"
import AdoptionScreen from "./screens/AdoptionScreen";
import AuthScreen from "./screens/AuthScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Adoption" component={AdoptionScreen}/>
                    <Stack.Screen name="Auth" component={AuthScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        paddingHorizontal: 20
    },
});
