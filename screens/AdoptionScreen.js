import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import ArchCounter from '../componants/ui/ArchCounter.js'
import CustomButton from '../componants/ui/CustomButton.js'
import CustomText from '../componants/ui/CustomText.js'
import Pack from '../componants/ui/Pack.js'

export default function AdoptionScreen() {
    return (
        <ScrollView>
            <ArchCounter />
            <View style={{ paddingHorizontal: 20 }}>
                <CustomText fontWeight="bold" font={24}>
                    Adoption
                </CustomText>
                <Image source={require('../assets/img/pack-asso.png')} />

                <CustomButton
                    color="white"
                    bgColor="#F06D76"
                    text="ACHETER UNE BOX"
                />
                <Pack />
            </View>
        </ScrollView>
    )
}
