import React from "react";
import { View, Text } from "react-native";

import styles from "../components/Styles/styles.tsx";

const stats = [
  { parameter: "Favorite meal", value: "Grilled Chicken Tacos" },
  { parameter: "Total meals prepared", value: 27 },
  { parameter: "Meals prepared (2 wks)", value: 6 },
  { parameter: "Avg meal cost ($)", value: 5.64 },
  { parameter: "Avg meal time (min)", value: 24 },
];
const StatsScreen = () => (
  <View>
    <View
      style={{ display: "flex", borderTopWidth: 16, borderTopColor: "#3aa43e" }}
    >
      {stats.map((stat) => (
        <View
          key={stat.parameter}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 4,
            borderTopWidth: 0,
            borderColor: "#3aa43e",
          }}
        >
          <Text style={{ margin: 10 }}>{stat.parameter + ":"}</Text>
          <Text style={{ margin: 10, fontStyle: "italic" }}>{stat.value}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default StatsScreen;
