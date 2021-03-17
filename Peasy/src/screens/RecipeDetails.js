import React from 'react';
import { StyleSheet, useWindowDimensions, View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreGraphic from '../assets/bbq.svg';
import InexpensiveGraphic from '../assets/inexpensiveGraphic.svg'
import PopularGraphic from '../assets/popular.svg'
import HealthyGraphic from '../assets/healthy.svg'
import styles from '../components/Styles/styles';
import { Data, AnalyzedInstructionsEntity } from './response'
import { Container, Header, Content, ListItem, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';



const RecipeDetailsScreen = ({ navigation }) => {
  return (
    <View style={{    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: "auto",
    marginTop: 20,
    padding: 70,
    flex: 1}}>
        <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: ''}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: ''}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </View>
  );
};

export default RecipeDetailsScreen;
