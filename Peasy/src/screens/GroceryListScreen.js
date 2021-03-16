import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GroceryGraphic from '../assets/shop.svg';
import styles from '../components/Styles/styles.tsx';

const GroceryListScreen = ({ navigation }) => {
  return (
    <View style={styles.app}>
      <Text style={styles.header}>Your grocery list is empty.</Text>
      <View style={styles.logoContainer}>
        <GroceryGraphic width={240} height={240}/>
      </View>
      <Text style={styles.h2}>Find recipes and fill your list!</Text>
    </View>
  );
}

export default GroceryListScreen;
