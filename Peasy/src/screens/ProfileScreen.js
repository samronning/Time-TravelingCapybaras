import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image,  Modal, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeGraphic from '../assets/profile.svg';
import styles from '../components/Styles/styles.tsx';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pizza',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Hamburger',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hot Dog',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const ProfileScreen = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <View style={styles.userProfile}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.profileModal}>
          <Text style={styles.headerProfile}>This is your profile.</Text>
          <View style={styles.logoContainerProfile}>
            <HomeGraphic width={200} height={200}/>
          </View>
          <Text style={styles.h2Profile}>You can view your saved recipes and update your account settings here. </Text>
          <TouchableOpacity
            style={styles.welcomeButton}
            onPress={() =>
              setModalVisible(false)
            }> 
            <Text style={styles.welcomeConfirm}>Great! Take me to my profile!</Text>
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
      </Modal>
      <TouchableOpacity
        style={styles.myProfile}
        onPress={() =>
          setModalVisible(false)
        }> 
        <View style={styles.individualIcon}>
          <HomeGraphic width={50} height={50}/>
        </View>
      </TouchableOpacity>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </SafeAreaView>

    </View>
  );
}

export default ProfileScreen;

