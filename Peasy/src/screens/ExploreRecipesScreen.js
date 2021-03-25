import React, { Component }from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity, Image, Button, FlatList, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import 'react-native-gesture-handler';
import ExploreGraphic from '../assets/bbq.svg';
import InexpensiveGraphic from '../assets/inexpensiveGraphic.svg'
import PopularGraphic from '../assets/popular.svg'
import HealthyGraphic from '../assets/salad.svg'
import styles from '../components/Styles/styles';
import { Data } from './response';
import HTML from "react-native-render-html";


export default class ExploreRecipesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      selectedRecipe: [],
      data: Data
    };
  }

  clickEventListener = (item) => {
    this.setState({selectedRecipe: item}, () =>{
      this.setModalVisible(true);
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  saveRecipe(recipe) {
    
  }
  render() {
    return (
      <View>
      <ScrollView>
      <View >
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
        <FlatList 
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id.toString();
          }}
          renderItem={({item}) => {
          return (
            <TouchableWithoutFeedback style={styles2.card} onPress={() => {this.clickEventListener(item)}}>
              <View >
                <View style={styles2.header}>
                <Text style={styles2.recipeTitle}>{item.title}</Text>
                <View style={{flex: 1}}>
                  {item.cheap && <InexpensiveGraphic width={30} height={30}/>}
                  {item.veryHealthy && <HealthyGraphic width={30} height={30} />}
                  {item.veryPopular && <PopularGraphic width={30} height={30} />}
                </View>
                </View>  

                <Image source={{uri: item.image}} style={{height: 200, width: Dimensions.get('screen').width, flex: 1}}/>
                <View style={styles2.recipeHighlights}>
                  <View style={{flex: 1}}>
                  <Text style={{fontSize:20}} >
                      {item.readyInMinutes}
                    </Text>
                      <Text>minutes to prepare</Text>
                  </View>
                    
                  <View style={{flex: 1}}>
                  <Text style={{fontSize:20}} >
                  ${item.pricePerServing/100}
                    </Text>
                      <Text>per serving</Text>
                  </View>
              </View>  
              </View>
            </TouchableWithoutFeedback>
          )}}/>

        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.setModalVisible(false)}
          visible={this.state.modalVisible}>
          <View style={styles2.popupOverlay}>
            <View style={styles2.popup}>
              <View style={styles2.popupContent}>
              <ScrollView contentContainerStyle={styles2.modalInfo}>
              <View style={styles2.popupButtons}>
                <TouchableOpacity onPress={() => {this.setModalVisible(false) }} style={styles2.btnClose}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
                    <Text style={styles2.name}>{this.state.selectedRecipe.title}</Text>
                    <HTML source={{ html: this.state.selectedRecipe.summary}} contentWidth={100} />
                    <Text>Ingredients</Text>

                  <Button onPress={this.saveRecipe(this.state.selectedRecipe)} title="Save Recipe" style={styles2.btnClose}/>
                </ScrollView>
              </View>
              
            </View>
          </View>
        </Modal>
      </View>
      </ScrollView>
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  recipeHighlights: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    fontSize: 15,

  },
  recipeTitle:{
    flex: 3,
    fontSize:20,
    alignSelf:'center',
    color: '#808080',
    fontWeight:'bold'
  },
  header:{
    flexDirection: 'row', 
    flexBasis:40, 
    justifyContent: 'space-around',
    padding: 10
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    flex:1,
  },
  detailContent:{
    top:80,
    height:500,
    width:Dimensions.get('screen').width - 90,
    marginHorizontal:30,
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  image:{
    width:90,
    height:90
  },



  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:0,
    backgroundColor:"white",
    flexBasis: '46%',
    flexDirection:'row'
  },

  name:{
    fontSize:20,
    flex:1,
    alignSelf:'center',
    color: '#808080',
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
 /************ modals ************/
  popup: {
    backgroundColor: 'white',
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height:Dimensions.get('screen').height,
    marginTop: 50,
    marginBottom: 50
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent:'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose:{
    height:20,
    backgroundColor:'#20b2aa',
    padding:20
  },
  modalInfo:{
    alignItems:'center',
    justifyContent:'center',
  }
});
