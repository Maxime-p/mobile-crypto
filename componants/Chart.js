// import React in our code
import React, { useState, useEffect } from 'react'

// import all the components we are going to use
import { Text, View, Dimensions, StyleSheet } from 'react-native'

//import React Native chart Kit for different kind of Chart
import { BarChart } from 'react-native-chart-kit'

export default CustomBarChart = () => {
    const randData = [...Array(10).keys()].map((i) => {
        const randNumber = Math.random() * 100
        return randNumber
    })

    const colors = [...Array(10).keys()].map((i) => {
        return (opacity = 1) => '#FFFF00'
    })
    const [data, setdata] = useState(randData)

    return (
        <View>
            <BarChart
                data={{
                    datasets: [
                        {
                            data,
                            colors,
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisLabel={'Rs'}
                chartConfig={{
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    fillShadowGradientOpacity: 1,
                    barRadius: 16,
                    useShadowColorFromDataset: false,
                }}
                showBarTops={false}
                fromZero={true}
                flatColor={true}
                withCustomBarColorFromData={true}
            />
        </View>
    )
}
