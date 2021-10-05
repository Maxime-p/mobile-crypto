import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "expo-chart-kit";
export default function chart(params) {
  const [values, setValues] = useState(null);
  const [dates, setDates] = useState(null);

  useEffect(() => {
    setValues(params.values);
    setDates(params.dates);
  }, []);

  if (values && dates) {
    return (
      <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: values,
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    );
  }
}
