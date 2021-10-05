import React, {useRef, useState} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import MapView, {Marker} from "react-native-maps";

export default function Adoption() {
    const map = useRef();

    const [location, setLocation] = useState({latitude: 0, longitude: 0});

    return(
        <View>
            <MapView ref={map} style={styles.map}>
                <Marker coordinate={{latitude: location.latitude, longitude: location.longitude}}/>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})
