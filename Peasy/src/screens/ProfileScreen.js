import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import HomeGraphic from "../assets/profile.svg";
import styles from "../components/Styles/styles.tsx";
import StatsScreen from "./StatsScreen.js";
import SettingsScreen from "./SettingsScreen.js";
import SettingsIcon from "../assets/settingsIcon.svg";
import StatisticsIcon from "../assets/statisticsIcon.svg";

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.app}>
      <HomeGraphic width={100} height={100} />
      <Text style={styles.h2}>Welcome, Alex</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ margin: 10, alignItems: "center" }}>
          <SettingsIcon />
          <Text>Settings</Text>
        </View>
        <View style={{ margin: 10, alignItems: "center" }}>
          <StatisticsIcon />
          <Text>Statistics</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
