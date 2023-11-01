import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from '../styles/settingsStyles';

const SettingsScreen = ({ setUploadedImage }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [budget, setBudget] = useState('');

  useEffect(() => {
    getPermission();
    loadSettings();
  }, []);

  const getPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'You need to grant permission to access the media library.');
    }
  };

  const loadSettings = async () => {
    try {
      const settings = await AsyncStorage.getItem('settings');
      if (settings) {
        const { name, image, budget } = JSON.parse(settings);
        setName(name);
        setBudget(budget);
        setImage(image);
        setUploadedImage(image); // Set the uploaded image URI in the parent component
      }
    } catch (error) {
      console.log('Error loading settings:', error);
    }
  };

  const saveSettings = async () => {
    try {
      const settings = JSON.stringify({ name, image, budget });
      await AsyncStorage.setItem('settings', settings);
      Alert.alert('Success', 'Profile settings saved');
    } catch (error) {
      console.log('Error saving settings:', error);
      Alert.alert('Error', 'Failed to save profile settings');
    }
  };

  const handleImageUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const { uri, type } = result;

      // Perform your upload logic here, such as sending the file to a server
      // Update the image state with the uploaded image details
      setImage({ uri, type });
      setUploadedImage(uri); // Set the uploaded image URI in the parent component
    }
  };

  const renderProfileImage = () => {
    if (image && image.uri) {
      return <Image source={{ uri: image.uri }} style={styles.profileImage} />;
    } else {
      return <Image source={require('../assets/logo.jpg')} style={styles.profileImage} />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change image</Text>
      <View style={styles.profileContainer}>
        {renderProfileImage()}
        <TouchableOpacity style={styles.editImageButton} onPress={handleImageUpload}>
          <Text style={styles.editImageButtonText}>choose</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.title}>Budget</Text>

      <TextInput
        style={styles.input}
        placeholder="Budget"
        keyboardType="numeric"
        value={budget}
        onChangeText={(text) => setBudget(text)}
      />
      <TouchableOpacity style={styles.button} onPress={saveSettings}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
