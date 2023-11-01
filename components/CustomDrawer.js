
import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';


const CustomDrawerContent = ({ navigation, uploadedImage }) => {

  const [logoName, setLogoName] = useState('');
  const [budget, setBudget] = useState('');

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const settings = await AsyncStorage.getItem('settings');
      if (settings) {
        const { name, budget } = JSON.parse(settings);
        setLogoName(name);
        setBudget(budget);
      }
    } catch (error) {
      console.log('Error loading settings:', error);
    }
  };


  let imageSource = null;

  if (typeof uploadedImage === 'string') {
    imageSource = { uri: uploadedImage };
  } else if (uploadedImage && uploadedImage.uri) {
    imageSource = uploadedImage;
  } else {
    imageSource = require('../assets/logo.jpg');
  }

  return (
    <ScrollView style={styles.bar}
      contentContainerStyle={{
        alignItems: "center",
        // backgroundColor:"red",
        display: "flex",
        alignItems: "center"
      }}>

      <View style={styles.drawerHeader}>
        <Image source={imageSource} style={styles.navLogo} />
        <Text style={styles.logoName}>{logoName}</Text>
        <Text style={styles.budget}>{budget}$</Text>
      </View>
      <Text onPress={() => navigation.navigate('Cart 🛒')} style={styles.menuItems}>Cart</Text>
      <Text onPress={() => navigation.navigate('Animes 🍜')} style={styles.menuItems}>Animes</Text>
      <Text onPress={() => navigation.navigate('Books')} style={styles.menuItems}>Books</Text>
      <Text onPress={() => navigation.navigate('Settings')} style={styles.menuItems}>Settings</Text>
      <Text onPress={() => navigation.navigate('About 💬')} style={styles.menuItems}>Developer</Text>
    </ScrollView>
  );
};

export default CustomDrawerContent;