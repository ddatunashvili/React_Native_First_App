import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './storage/store';



import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomDrawerContent from "./components/CustomDrawer";
import AboutScreen from './screens/AboutScreen';
import BooksScreen from './screens/BooksScreen';
import HomeScreen from "./screens/AnimesScreen";
import SettingsScreen from './screens/SettingsScreen';
import CartScreen from './screens/cartScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    // Load the initial settings when the app runs
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const settings = await AsyncStorage.getItem('settings');
      if (settings) {
        const { image } = JSON.parse(settings);
        setUploadedImage(image);
      }
    } catch (error) {
      console.log('Error loading settings:', error);
    }
  };

  const handleSettingsChange = (newUploadedImage) => {
    setUploadedImage(newUploadedImage);
  };

  return (
    <Provider store={store}>
      <NavigationContainer  >
        <Drawer.Navigator screenOptions={{
          drawerStyle: {
            width: 200,
            // display:"flex",
            // justifyContent:"center",
            // alignItems:"center"
          },
        }}
          drawerContent={(props) => <CustomDrawerContent {...props} uploadedImage={uploadedImage} />}
        >
          <Drawer.Screen name="Animes 🍜" component={HomeScreen} />
          <Drawer.Screen name="About 💬" component={AboutScreen} />
          <Drawer.Screen name="Cart 🛒" component={CartScreen} />
          <Drawer.Screen name="Books" component={BooksScreen} />
          <Drawer.Screen name="Settings">
            {(props) => (
              <SettingsScreen {...props} setUploadedImage={handleSettingsChange} />
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
