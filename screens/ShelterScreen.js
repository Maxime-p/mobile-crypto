import React, { useState, useEffect } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView,
    Image,
    Dimensions,
} from 'react-native'
import ArcheCounter from '../componants/ui/ArchCounter.js'

import Down from '../assets/icons/Box'
import CustomModal from '../componants/Modal.js'
import CustomBarChart from '../componants/Chart.js'
import CustomText from '../componants/ui/CustomText.js'
import CustomButton from '../componants/ui/CustomButton.js'

export default function ShelterScreen() {
    const [modalVisibility, setModalVisibility] = useState(false)

    const handleSwipeDown = () => {
        setModalVisibility(false)
    }
    const [text, onChangeText] = React.useState('')
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <ArcheCounter />

            <View style={{ padding: 20 }}>
                <CustomText font={24} fontWeight="bold">
                    Mon refuge
                </CustomText>

                <TextInput
                    placeholder="Recherchez votre animal..."
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />

                <CustomButton
                    text="Tous"
                    bgColor="#071D48"
                    color="white"
                    style={{
                        width: Dimensions.get('window').width * 0.3,
                        height: Dimensions.get('window').height * 0.06,
                    }}
                    icon={<Down color={'#FFF'} />}
                ></CustomButton>
            </View>

            <View style={styles.raw}>
                <Image
                    style={styles.images}
                    source={require('../assets/img/Card/Animals-1.png')}
                />
                <Image
                    style={styles.images}
                    source={require('../assets/img/Card/Animals-2.png')}
                />
            </View>

            <View style={styles.raw}>
                <Image
                    source={require('../assets/img/Card/Animals-3.png')}
                    style={styles.images}
                />
                <Image
                    style={styles.images}
                    source={require('../assets/img/Card/Animals.png')}
                />
            </View>
            {/*  <TouchableOpacity onPress={() => setModalVisibility(true)}>
                <Text>modale</Text>
            </TouchableOpacity>
             {modalVisibility && (
                <CustomModal handleSwipeDown={handleSwipeDown}>
                    <CustomBarChart></CustomBarChart>
                </CustomModal>
            )}
            <View>
                <Image source={require('../assets/img/Card/Animals.png')} />
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#F4F4F4',
        marginVertical: 15,
    },
    raw: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
    },
    images: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.25,
    },
})
