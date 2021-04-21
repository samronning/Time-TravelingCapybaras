import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import HomeGraphic from "../assets/profile.svg";
import styles from "../components/Styles/styles.tsx";
import SettingsIcon from "../assets/settingsIcon.svg";
import StatisticsIcon from "../assets/statisticsIcon.svg";
import BudgetIcon from "../assets/budgetIcon.svg";

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.app}>
      <HomeGraphic width={100} height={100} />
      <Text style={styles.h2}>Welcome, Sam</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity
          style={{ margin: 10, alignItems: "center" }}
          onPress={() => navigation.navigate("Budget")}
          title="Budget"
        >
          <BudgetIcon />
          <Text>Budget</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 10, alignItems: "center" }}
          onPress={() => navigation.navigate("Statistics")}
          title="Statistics"
        >
          <StatisticsIcon />
          <Text>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 10, alignItems: "center" }}
          onPress={() => navigation.navigate("Settings")}
          title="Settings"
        >
          <SettingsIcon />
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
