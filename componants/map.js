import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function map(params) {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    setLocations(params);
  })();

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    return (
      <View style={styles.full}>
        <MapView style={styles.full}>
          {locations.map((location) => (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              pinColor={"red"} // any color
              title={"i'm here"}
              description={"best place eva"}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  full: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
