import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomModal from '../componants/Modal.js'
import CustomBarChart from '../componants/Chart.js'

export default function ShelterScreen() {
    const [modalVisibility, setModalVisibility] = useState(false)

    const handleSwipeDown = () => {
        setModalVisibility(false)
    }

    return (
        <View>
            <Text> Shelter</Text>
            <TouchableOpacity onPress={() => setModalVisibility(true)}>
                <Text>modale</Text>
            </TouchableOpacity>
            {modalVisibility && (
                <CustomModal handleSwipeDown={handleSwipeDown}>
                    <CustomBarChart></CustomBarChart>
                </CustomModal>
            )}
        </View>
    )
}
