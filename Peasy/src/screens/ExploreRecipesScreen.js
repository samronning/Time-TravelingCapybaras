import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreGraphic from '../assets/bbq.svg';
import styles from '../components/Styles/styles.tsx';

const ExploreRecipesScreen = ({ navigation }) => {
  return (
    <View style={styles.app}>
      <Text style={styles.header}>Thousands of recipes, at your fingertips.</Text>
      <View style={styles.logoContainer}>
        <ExploreGraphic width={240} height={240}/>
      </View>
      <Text style={styles.h2}>Start exploring and see what's for dinner!</Text>
    </View>
  );
}

export default ExploreRecipesScreen;
