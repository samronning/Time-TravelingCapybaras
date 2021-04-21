import React from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { useState } from "react";
import DollarIcon from "../assets/currencyDollar.svg";

const EditBudget = ({ route }) => {
  const { options } = route.params;
  const [budgets, setBudgets] = useState(["100", " 450", "1400"]);
  return (
    <View style={{ marginLeft: 20, marginTop: 20 }}>
      {options.map((option, option_i) => (
        <View key={option}>
          <Text>{option}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <DollarIcon />
            <TextInput
              style={{
                margin: 12,
                borderWidth: 1,
                height: 40,
                width: Dimensions.get("window").width / 2,
              }}
              key={option}
              defaultValue={budgets[option_i]}
              onChange={(e) => {
                let temp_budgets = budgets;
                temp_budgets[option_i] = e.target.value;
                setBudgets(temp_budgets);
              }}
            ></TextInput>
          </View>
        </View>
      ))}
    </View>
  );
};

export default EditBudget;
