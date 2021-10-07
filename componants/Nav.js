import React from "react";
import {StyleSheet, View} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/HomeScreen";
import ProjectScreen from "../screens/ProjectScreen";
import AdoptionScreen from "../screens/AdoptionScreen";
import ShelterScreen from "../screens/ShelterScreen";

import House from '../assets/icons/House.js';
import Info from "../assets/icons/Info";
import Shelter from "../assets/icons/Shelter";
import Wallet from "../assets/icons/Wallet";
import {TabBarAdvancedButton} from "./ui/TabBarAdvancedButton";
import WalletScreen from "../screens/WalletScreen";


const BottomBar = createBottomTabNavigator();

export default function Nav({state}) {
    return (
        <View style={styles.container}>
            <BottomBar.Navigator
                style={styles.nav}
                initialRouteName="Splash"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    headerShown: false
                }}
            >
                <BottomBar.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: () => (
                            <House color='#6D697C' width={32} height={32}/>
                        )
                    }}
                />
                <BottomBar.Screen
                    name="Project"
                    component={ProjectScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: () => (
                            <Info color='#6D697C' width={32} height={32}/>
                        )
                    }}
                />
                <BottomBar.Screen
                    name="Adoption"
                    component={AdoptionScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarButton: (props) => (
                            <TabBarAdvancedButton  {...props}/>
                        )
                    }}
                />
                <BottomBar.Screen
                    name="Shelter"
                    component={ShelterScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: () => (
                            <Shelter color='#6D697C' width={32} height={32}/>
                        )
                    }}
                />
                <BottomBar.Screen
                    name="Wallet"
                    component={WalletScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: () => (
                            <Wallet color='#6D697C' width={32} height={32}/>
                        )
                    }}
                />
            </BottomBar.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nav: {
        backgroundColor: '#5DB1C3'
    }
});
