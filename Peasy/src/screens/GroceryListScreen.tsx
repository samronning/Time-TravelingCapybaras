import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, TouchableOpacity, TouchableHighlight, Image, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import GroceryGraphic from '../assets/shop.svg';
import styles from '../components/Styles/styles.tsx';

function GroceryItem({ mainList, setMainList, index }) {

  const onItemPress = (index) => {

    // Delete element from the listing
    mainList.splice(index, 1);

    // Update officially so React can track it
    setMainList([...mainList]);
  };

  return (
    <View style={customStyles.item}>
      <TouchableHighlight
        style={customStyles.itemButton}
        underlayColor={'#3AA43E'}
        onPress={() => { onItemPress(index) }
        }>
        <Text style={styles.buttonText}></Text>
      </TouchableHighlight>
      <TextInput
        style={customStyles.itemField}
        onChangeText={text => {
          let list = mainList;
          list[index] = { id: list[index].id, text: text };
          setMainList(list);
        }}
      // value={groceryList[index].text}
      />
    </View>
  )
}

interface GroceryItem {
  id: string;
  text: string;
}

const GroceryListScreen = ({ navigation }) => {

  const [groceryList, setGroceryList] = useState<GroceryItem[]>([]);
  const [groceryItemIndex, setGroceryIndex] = useState(0);

  // const items = [
  //   { id: '0', text: 'View' },
  //   { id: '1', text: 'Text' },
  //   { id: '2', text: 'Image' },
  //   { id: '3', text: 'ScrollView' },
  //   { id: '4', text: 'ListView' },
  // ]

  const renderItem = ({ item, index, drag, isActive }: RenderItemParams<GroceryItem>) => {

    const onItemPress = (index: number) => {

      // Delete element from the listing
      groceryList.splice(index, 1);

      // Update officially so React can track it
      setGroceryList([...groceryList]);
    };

    return (
      <View style={customStyles.item}>
        <TouchableHighlight
          style={customStyles.itemButton}
          underlayColor={'#3AA43E'}
          onPress={() => { onItemPress(index) }
          }>
          <Text style={styles.buttonText}></Text>
        </TouchableHighlight>
        <TextInput
          style={customStyles.itemField}
          onTouchStart={drag}
          onChangeText={text => {
            let list = groceryList;
            list[index] = { id: list[index].id, text: text };
            setGroceryList(list);
          }}
        // value={groceryList[index].text}
        />
      </View>
    )

    // return (
    //   <GroceryItem
    //     mainList={groceryList}
    //     setMainList={setGroceryList}
    //     index={index}
    //     onPressIn=
    //   />
    // );
  }

  if (groceryList.length) {
    return (
      <SafeAreaView style={customStyles.container}>
        <Text style={customStyles.header}>Grocery List</Text>
        {/* <FlatList
      
        data={groceryList}
        renderItem={({ item, index }) => 
          <GroceryItem mainList={groceryList} setMainList={setGroceryList} index={index} />
        }
      keyExtractor={(item) => item.id}
      /> */}
        <DraggableFlatList
          data={groceryList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onDragEnd={({ data }) => setGroceryList(data)}
        />
        <TouchableOpacity
          style={customStyles.addButton}
          onPress={() => {
            setGroceryList([...groceryList, { id: String(groceryItemIndex), text: "" }]);
            setGroceryIndex(groceryItemIndex + 1);
          }
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
          <GroceryGraphic width={240} height={240} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setGroceryList([...groceryList, { id: String(groceryItemIndex), text: "" }]);
            setGroceryIndex(groceryItemIndex + 1);
          }
          }>
          <Text style={styles.buttonText}>Add an item</Text>
        </TouchableOpacity>
        <Text style={customStyles.h2}>Find recipes and fill your list!</Text>
      </View>
    );
  }
}

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    // padding: 70,
    // justifyContent: "center"
  },
  title: {
    fontSize: 32,
  },
  h2: {
    fontSize: 20,
    padding: 20,
    color: '#808080'
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  addButton: {
    backgroundColor: '#3AA43E',
    // position: "absolute",
    alignSelf: 'center',
    // alignItems: "center",
    // right: 30,
    // bottom: 30,
    // height: 70,
    // width: 50,
    padding: 25,
    borderRadius: 100
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemButton: {
    marginLeft: 16,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: '#808080',
    padding: 10,
    borderRadius: 100,
    // flex: 1,
    height: 10,
    width: 10,
  },
  itemField: {
    fontSize: 20,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#808080',
    backgroundColor: "white",
    borderRadius: 10,
    flex: 5
  },
});

export default GroceryListScreen;
