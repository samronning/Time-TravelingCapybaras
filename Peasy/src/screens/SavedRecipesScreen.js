import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipesGraphic from '../assets/recipes.svg';
import styles from '../components/Styles/styles.tsx';

const SavedRecipesScreen = ({ navigation }) => {
  return (
    <View style={styles.app}>
      <Text style={styles.header}>You've saved 0 recipes.</Text>
      <View style={styles.logoContainer}>
        <RecipesGraphic width={240} height={240}/>
      </View>
      <Text style={styles.h2}>Recipes you save will appear here.</Text>
    </View>
  );
}

export default SavedRecipesScreen;
