import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Column } from "native-base";

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const Chart = () => {
  return (
    <Column>
      {/* <Text>Bezier Line Chart</Text> */}
      <LineChart
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              data: [16, 14, 15, 20, 22, 21, 25, 19, 15, 22],
            },
          ],
        }}
        width={Dimensions.get("window").width - 16} // from react-native
        height={220}
        // yAxisLabel=""
        yAxisSuffix="KM"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(73, 186, 230, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(163, 163, 163, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "3",
            strokeWidth: "1",
            stroke: "#34A7D4",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </Column>
  );
};

export default Chart;

const styles = StyleSheet.create({});
