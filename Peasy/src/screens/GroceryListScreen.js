import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, TouchableOpacity, Image, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GroceryGraphic from '../assets/shop.svg';
import styles from '../components/Styles/styles.tsx';

const GroceryListScreen = ({ navigation }) => {

  // const items = [
  //   { id: '0', text: 'View' },
  //   { id: '1', text: 'Text' },
  //   { id: '2', text: 'Image' },
  //   { id: '3', text: 'ScrollView' },
  //   { id: '4', text: 'ListView' },
  // ]

  const [groceryList, setGroceryList] = useState([]);

  if (groceryList.length) {
    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Grocery List</Text>
        <FlatList
      
        data={groceryList}
        renderItem={({ item, index }) => <TextInput
        style={customStyles.item}
        onChangeText={text => {
            let list = groceryList;
            list[index] = {id: list[index].id, text: text};
            setGroceryList(list);
          }}
        // value={groceryList[index].text}
      />}
      keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          {setGroceryList([...groceryList, { id: String(groceryList.length), text: "" }]);}
        }> 
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </SafeAreaView>
        
    );
  }
  else {
    return (
    
    <View style={styles.app}>
      <Text style={styles.header}>Your grocery list is empty.</Text>
      <View style={styles.logoContainer}>
        <GroceryGraphic width={240} height={240}/>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          {setGroceryList([...groceryList, { id: String(groceryList.length), text: "" }])}
        }> 
        <Text style={styles.buttonText}>Add an item</Text>
      </TouchableOpacity>
      <Text style={styles.h2}>Find recipes and fill your list!</Text>
    </View>
  );   
  }
}

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center"
  },
  item: {
    fontSize: 20,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 10
  },
  title: {
    fontSize: 32,
  },
});

export default GroceryListScreen;
