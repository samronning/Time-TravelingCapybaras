import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeGraphic from '../assets/profile.svg';
import styles from '../components/Styles/styles.tsx';



const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.app}>
      <Text style={styles.header}>This is your profile.</Text>
      <View style={styles.logoContainer}>
        <HomeGraphic width={240} height={240}/>
      </View>
      <Text style={styles.h2}>You can view your saved recipes and update your account settings here. </Text>
    </View>
  );
}

export default ProfileScreen;

