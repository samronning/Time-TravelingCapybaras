import React from "react";
import { View, Text, Button } from "react-native";
import { useState } from "react";

const settings = [
  { text: "Display Mode", type: "options", options: ["Light", "Dark"] },
  {
    text: "Recipe Badge Display Size",
    type: "options",
    options: ["Small", "Medium", "Large"],
  },
  {
    text: "Default Recipe Sorting Scheme (asc)",
    type: "options",
    options: ["Cost of Ingredients", "Time"],
  },
];

const SettingsScreen = () => {
  const [selections, setSelections] = useState([0, 0, 0]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: selections[0] ? "black" : "white",
      }}
    >
      {settings.map((setting, setting_id) => (
        <View
          key={setting.text}
          style={{
            marginHorizontal: 20,
            display: "flex",
            flexDirection: "column",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: selections[0] ? "white" : "black",
            }}
          >
            {setting.text}
          </Text>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            {setting.options.map((option, option_id) => (
              <Button
                onPress={() => {
                  let temp_selections = [...selections];
                  temp_selections[setting_id] = option_id;
                  setSelections(temp_selections);
                }}
                key={option}
                title={option}
                color={
                  option_id === selections[setting_id] ? "#18821c" : "#3aa43e"
                }
              ></Button>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default SettingsScreen;
