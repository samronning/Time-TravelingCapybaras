import React from 'react';
import { StyleSheet, useWindowDimensions, View, Text, TouchableOpacity, Image, FlatList, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreGraphic from '../assets/bbq.svg';
import InexpensiveGraphic from '../assets/inexpensiveGraphic.svg'
import PopularGraphic from '../assets/popular.svg'
import HealthyGraphic from '../assets/salad.svg'
import styles from '../components/Styles/styles';
import { Data, AnalyzedInstructionsEntity } from './response'
import { Container, Header, Content, ListItem, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import HTML from "react-native-render-html";
import { Ionicons } from '@expo/vector-icons';

let modalVisibility = false;
let currentRecipe = null;


const RecipeDetailsScreen = ({ currentRecipe, modalVisibility, onDismiss }) => {
  return (
    <View >
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisibility}
        onRequestClose={() => { onDismiss() }}
        >
            <View >
                <View >
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => { onDismiss() }}>
                        <Text style={styles.buttonText}>Close</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
      </View>
  );
};
const ExploreRecipesScreen = ({ navigation }) => {
  const _onPress = (item) => { 
    showModal(item);
  };
  const showModal = (item) => {
    modalVisibility = true;
    currentRecipe = item;
  }
  const hideModal = (item) => {
    modalVisibility = false;
    currentRecipe = null;
  }
  const contentWidth = useWindowDimensions().width;
  return (
    <View>
    <ScrollView>
    <View style={{    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: "auto",
    marginTop: 20,
    padding: 50}}>
      <Text style={styles.header}>Thousands of recipes, at your fingertips.</Text>
      <View style={styles.logoContainer}>
        <ExploreGraphic width={240} height={240}/>
      </View>
      <Text style={styles.h2}>Start exploring and see what's for dinner!</Text>
    </View>
      <View >
      <FlatList data={Data} renderItem={({ item }) => (
        <TouchableOpacity 
        onPress={_onPress(item)}
        >
            <Content style={{padding:10}}>
            <Card >
              <CardItem bordered>
                <Left>
                  <Body>
                    <Text style={styles.h2}>{item.title}</Text>
                  </Body>
                </Left>
                <Right flex="row">
                {item.cheap && <InexpensiveGraphic width={50} height={50}/>}
                {item.veryHealthy && <HealthyGraphic width={40} height={40} />}
                {item.veryPopular && <PopularGraphic width={50} height={50} />}

                </Right>
              </CardItem>
              <CardItem cardBody >
                <Image source={{uri: item.image}} style={{height: 200, width: "100%", flex: 1}}/>
              </CardItem>
              <CardItem style={{backgroundColor: 'grey'}}>
              <Left>
                  <Body>
                    <Text style={{color:'white'}}>
                      {item.readyInMinutes} minutes to prepare
                    </Text>
                  </Body>
                </Left>
                <Right>
                <Body>
                    <Text style={{color:'white'}}>
                      ${item.pricePerServing/100} per serving
                    </Text>
                  </Body>
                </Right>
              </CardItem>
            </Card>
          </Content>
          </TouchableOpacity>
        )} keyExtractor={item => item.id.toString()} />
        </View>
    </ScrollView>
    {modalVisibility && <RecipeDetailsScreen 
        recipe={currentRecipe} 
        visible={modalVisibility} 
        onDismiss={hideModal}/>}
    </View>
  );
};

export default ExploreRecipesScreen;
