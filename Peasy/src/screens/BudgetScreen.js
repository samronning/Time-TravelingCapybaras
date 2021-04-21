import { LineChart } from "react-native-chart-kit";
import React from "react";
import { useState } from "react";
import { Text, View, Dimensions, Button, TextInput } from "react-native";

const options = ["Week", "Month", "3 Months"];
const defaultBudgets = [100, 450, 1400];

const data = [
  {
    labels: ["4/14", "4/15", "4/16", "4/17", "4/18", "4/19", "4/20"],
    datasets: [
      {
        data: [100, 70, 70, 40, 30, 10, 10],
      },
    ],
  },
  {
    labels: ["3/20", "3/25", "3/30", "4/4", "4/9", "4/14", "4/20"],
    datasets: [
      {
        data: [450, 350, 300, 280, 150, 20],
      },
    ],
  },
  {
    labels: ["1/20", "2/4", "2/19", "3/6", "3/21", "4/5", "4/20"],
    datasets: [
      {
        data: [1400, 1100, 950, 700, 450, 280, 100],
      },
    ],
  },
];

const chartConfig = {
  backgroundGradientFrom: "#18821c",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#3aa43e",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 10, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const BudgetScreen = ({ navigation }) => {
  const [choice, setChoice] = useState(0);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text style={{ marginTop: 10, fontSize: 40, textAlign: "center" }}>
        Remaining Budget
      </Text>
      <LineChart
        data={data[choice]}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        bezier
      />
      <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        {options.map((option, choice_i) => (
          <Button
            onPress={() => {
              setChoice(choice_i);
            }}
            key={option}
            title={option}
            color={choice === choice_i ? "#18821c" : "#3aa43e"}
          ></Button>
        ))}
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          title="Edit Budgets"
          color="#3aa43e"
          onPress={() =>
            navigation.navigate("Edit Budgets", { options: options })
          }
        ></Button>
      </View>
    </View>
  );
};

export default BudgetScreen;
