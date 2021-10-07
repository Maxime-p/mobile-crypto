import React from "react";
import {Dimensions} from "react-native";
import {LineChart} from "react-native-chart-kit";

export default function BezierLineChart() {
    return (
        <LineChart
            data={{
                labels: ['01/05', '01/05', '01/05', '01/05'],
                datasets: [
                    {
                        data: [
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                        ],
                    },
                ],
            }}
            width={Dimensions.get('window').width - 40} // from react-native
            height={220}
            yAxisLabel={'$'}
            chartConfig={{
                backgroundColor: '#FAF9F6',
                backgroundGradientFrom: '#FAF9F6',
                backgroundGradientTo: '#FAF9F6',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 255) => `rgba(75, 198, 185, ${opacity})`,
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
    )
}
