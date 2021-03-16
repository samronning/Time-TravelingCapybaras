import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeGraphic from '../assets/profile.svg';




const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.app}>
      <Text style={styles.header}>This is your profile.</Text>
      <View style={styles.logoContainer}>
        <HomeGraphic width={240} height={240}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: "auto",
    padding: 70,
    maxWidth: 500
  },
  header:{
    fontSize: 50,
    fontWeight: 'bold',
  },
  logoContainer: {
    paddingVertical: 50
  }
});

export default ProfileScreen;

