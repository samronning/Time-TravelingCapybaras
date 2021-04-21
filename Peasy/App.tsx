import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import styles from "./src/components/Styles/styles.tsx";
import Ionicons from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SavedRecipesScreen from "./src/screens/SavedRecipesScreen";
import ExploreRecipesScreen from "./src/screens/ExploreRecipesScreen";
import StatisticsScreen from "./src/screens/StatisticsScreen";
import BudgetScreen from "./src/screens/BudgetScreen";
import EditBudgetScreen from "./src/screens/EditBudgetScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import GroceryListScreen from "./src/screens/GroceryListScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "./src/assets/homeIcon.svg";
import ListIcon from "./src/assets/listIcon.svg";
import ExploreIcon from "./src/assets/exploreIcon.svg";
import SavedIcon from "./src/assets/savedIcon.svg";
import ProfileIcon from "./src/assets/profileIcon.svg";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const createProfileScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Budget" component={BudgetScreen} />
    <Stack.Screen name="Statistics" component={StatisticsScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Edit Budgets" component={EditBudgetScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return <HomeIcon height={30} width={30} />;
            }
            if (route.name === "Explore") {
              return <ExploreIcon height={30} width={30} />;
            }
            if (route.name === "List") {
              return <ListIcon height={30} width={30} />;
            }
            if (route.name === "Saved") {
              return <SavedIcon height={30} width={30} />;
            }
            if (route.name === "Profile") {
              return <ProfileIcon height={30} width={30} />;
            }
          },
          tabBarLabel: ({ focused, color }) => {
            return null;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreRecipesScreen} />
        <Tab.Screen name="List" component={GroceryListScreen} />
        <Tab.Screen name="Saved" component={SavedRecipesScreen} />
        <Tab.Screen name="Profile" children={createProfileScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
