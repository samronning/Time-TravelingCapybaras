import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeGraphic from '../assets/homeGraphic.svg';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.app}>
      <Text style={styles.header}>Welcome to Peasy.</Text>
      <View style={styles.logoContainer}>
        <HomeGraphic width={240} height={240}/>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Profile', { name: 'your' })
        }> 
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
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
  header: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#808080',
    alignItems: "center",
    padding: 20,
    borderRadius: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  logoContainer: {
    paddingVertical: 50
  }
});

export default HomeScreen;
