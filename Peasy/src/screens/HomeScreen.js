import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeGraphic from '../assets/homeGraphic.svg';
import styles from '../components/Styles/styles.tsx';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.app}>
      <Text style={styles.header}>Welcome to Peasy.</Text>
      <View style={styles.logoContainer}>
        <HomeGraphic width={240} height={240}/>
      </View>
      <Text style={styles.h2}>Because food should be fun.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Explore')
        }> 
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
