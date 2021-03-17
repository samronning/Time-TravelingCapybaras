import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Modal, Keyboard, Alert, TextInput, TouchableWithoutFeedback} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreGraphic from '../assets/bbq.svg';
import styles from '../components/Styles/styles.tsx';

const ExploreRecipesScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationModal, confirmationVisible] = useState(false);
  const [recipeName, onChange] = React.useState(null);
  const [tags, tagChange] = React.useState(null);
  const [ingredients, ingredientChange] = React.useState(null);
  return (
    <View style={styles.app}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={modalstyles.centeredView}>
          <View style={modalstyles.modalView}>
            <Text style={modalstyles.modalText}>Enter recipe information here</Text>
            <TextInput
              multiline
              style={modalstyles.input}
              onChangeText={onChange}
              value={recipeName}
              placeholder="Recipe name"
              keyboardType="default"
            />
            <TextInput
              multiline
              style={modalstyles.input}
              onChangeText={tagChange}
              value={tags}
              placeholder="Enter any tags (vegan, healthy, etc) seperated by commas"
              keyboardType="default"
            />
            <TextInput
              multiline
              style={modalstyles.input}
              onChangeText={ingredients}
              value={ingredientChange}
              placeholder="Enter ingredients, separated by commas"
              keyboardType="default"
            />
            {/*Note this was going to be a checkbox but react-native decided to say no */}
            <TextInput
              multiline
              style={modalstyles.input}
              onChangeText={ingredients}
              value={ingredientChange}
              placeholder="Would you like to make this recipe public?"
              keyboardType="default"
            />
            <View style={{ flexDirection:"row" }}>
              <TouchableOpacity
                style={modalstyles.addRecipe}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  confirmationVisible(true);
                }}
              >
              <Text style={modalstyles.textStyle}>Add your recipe</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={modalstyles.cancel}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
              <Text style={modalstyles.textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </Modal>
      <Modal
            animationType="slide"
            transparent={true}
            visible={confirmationModal}
            onRequestClose={() => {
              confirmationVisible(!confirmationModal);
            }}
          >
        <View style={modalstyles.centeredView}>
          <View style={modalstyles.modalView}>
            <Text style={styles.cardH1}>{recipeName} has been added!</Text>
            <TouchableOpacity
              style={modalstyles.addRecipe}
              onPress={() => 
                confirmationVisible(!confirmationModal)
              }
            ></TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
          style={styles.homeCard2}
          onPress={() =>
            setModalVisible(true)
          }> 
          <Text style={styles.cardH1}>Add your own recipe</Text>
          <View
            style={[
              { justifyContent: "absolute",
                top: -40,
                left: 255},
            ]}
          >
          </View>
        </TouchableOpacity>
    </View>
  );
}

const modalstyles = StyleSheet.create({
  addRecipe: {
    height: 40,
    width: 200,
    padding: 10,
    backgroundColor: '#3AA43E',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  cancel: {
    height: 40,
    width: 200,
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});


export default ExploreRecipesScreen;
