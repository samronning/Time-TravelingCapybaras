import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeGraphic from '../assets/homeGraphic.svg';
import Peas from '../assets/peas.svg';
import NextIcon from '../assets/nextIcon.svg';
import styles from '../components/Styles/styles.tsx';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Peas width={100} height={100}/>
      <Text style={styles.peasy}> peasy </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.homeCard1}
            onPress={() =>
              navigation.navigate('Explore')
            }> 
            <Text style={styles.cardH1}>Explore new recipes</Text>
            <Text style={styles.cardH2}>Browse through our expansive database of popular recipes from around the internet.</Text>
            <View
              style={[
                { justifyContent: "absolute",
                  top: -30,
                  left: 255},
              ]}
            >
              <NextIcon height={30} width={30} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.recipeCard1}
            onPress={() =>
              navigation.navigate('Explore')
            }> 
            <ImageBackground 
              source={require('../assets/salmonpasta.jpeg')}
              style={styles.recipeCardBg}
              imageStyle={{ borderRadius: 20 }}
            />
            <Text style={styles.recipeHL}> HIGHLIGHTED RECIPE ⭐</Text>
              <Text style={styles.recipeH1}>Salmon Pea Pasta</Text>
              <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row", height: 40}}>
                    <Text style={styles.recipeStat}>Rating: 😋😋😋😋</Text>
                    <Text style={styles.recipeStat}>Time: ⏰⏰ </Text>
                    <Text style={styles.recipeStat}>Difficulty: 🔪</Text>
                  </View>
              </View>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.homeCard2}
            onPress={() =>
              navigation.navigate('List')
            }> 
            <Text style={styles.cardH1}>Build and share your grocery list</Text>
            <Text style={styles.cardH2}>Choose recipes you want to make and we'll build the list for you.</Text>
            <View
              style={[
                { justifyContent: "absolute",
                  top: -40,
                  left: 255},
              ]}
            >
              <NextIcon height={30} width={30} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.recipeCard1}
            onPress={() =>
              navigation.navigate('Explore')
            }> 
            <ImageBackground 
              source={require('../assets/bobby.jpeg')}
              style={styles.recipeCardBg}
              imageStyle={{ borderRadius: 20 }}
            />
            <Text style={styles.recipeHL}> VIDEO 📺</Text>
              <Text style={styles.recipeH1}>Easy Risotto with Bobby Flay</Text>
              <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row", height: 40}}>
                    <Text style={styles.recipeStat}>Rating: 😋😋😋😋😋</Text>
                    <Text style={styles.recipeStat}>Time: ⏰⏰⏰ </Text>
                    <Text style={styles.recipeStat}>Difficulty: 🔪</Text>
                  </View>
              </View>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.homeCard3}
            onPress={() =>
              navigation.navigate('Saved')
            }> 
            <Text style={styles.cardH1}>Organize and store your favorite recipes</Text>
            <Text style={styles.cardH2}>No more ripped-out magazine pages or 40-year-old pieces of paper.</Text>
            <View
              style={[
                { justifyContent: "absolute",
                  top: -40,
                  left: 255},
              ]}
            >
              <NextIcon height={30} width={30} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.recipeCard1}
            onPress={() =>
              navigation.navigate('Explore')
            }> 
            <ImageBackground 
              source={require('../assets/mealprep.png')}
              style={styles.recipeCardBg}
              imageStyle={{ borderRadius: 20 }}
            />
            <Text style={styles.recipeHL}> ARTICLE 📚</Text>
              <Text style={styles.recipeH1}>10 Appliances that Make Meal Prep a Breeze</Text>
              <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row", height: 40}}>
                    <Text style={styles.recipeStat}>CONVENIENCE</Text>
                    <Text style={styles.recipeStat}>MEAL PREP</Text>
                    <Text style={styles.recipeStat}>PLANNING</Text>
                  </View>
              </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
