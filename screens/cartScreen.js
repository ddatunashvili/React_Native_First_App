import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addAnime, removeAnime } from '../storage/actions';
import cartStyles from '../styles/cartStyles';

const CartScreen = () => {
  const animeList = useSelector((state) => state.animeList);
  const budget = useSelector((state) => state.budget); // Retrieve the budget value from state
  const dispatch = useDispatch();

  const handleRemoveAnime = (animeId) => {
    Alert.alert('Anime removed');
    dispatch(removeAnime(animeId));
    saveAnimeListToStorage(animeList.filter((anime) => anime._id !== animeId));
  };

  const handleBuyAnime = (animeId, price) => {
    if (price > budget) {
      Alert.alert('Insufficient budget');
      return;
    }

    Alert.alert('Anime purchased');
    dispatch(removeAnime(animeId));
    saveAnimeListToStorage(animeList.filter((anime) => anime._id !== animeId));
    // Update the budget value in local storage
    const newBudget = budget - price;
    saveBudgetToStorage(newBudget);
  };

  const saveAnimeListToStorage = async (updatedAnimeList) => {
    try {
      const serializedAnimeList = JSON.stringify(updatedAnimeList);
      await AsyncStorage.setItem('animeList', serializedAnimeList);
      console.log('Anime list saved to storage');
    } catch (error) {
      console.error('Failed to save anime list to storage:', error);
    }
  };

  const saveBudgetToStorage = async (newBudget) => {
    try {
      await AsyncStorage.setItem('budget', newBudget.toString());
      console.log('Budget saved to storage');
    } catch (error) {
      console.error('Failed to save budget to storage:', error);
    }
  };

  const loadAnimeListFromStorage = async () => {
    try {
      const serializedAnimeList = await AsyncStorage.getItem('animeList');
      if (serializedAnimeList) {
        const storedAnimeList = JSON.parse(serializedAnimeList);
        storedAnimeList.forEach((anime) => {
          if (!animeList.some((addedAnime) => addedAnime._id === anime._id)) {
            dispatch(addAnime(anime));
          }
        });
        console.log('Anime list loaded from storage');
      }
    } catch (error) {
      console.error('Failed to load anime list from storage:', error);
    }
  };

  useEffect(() => {
    loadAnimeListFromStorage();
  }, []);

  useEffect(() => {
    console.log('Anime List after removal:', animeList.map((anime) => anime.title).join(', '));
    saveAnimeListToStorage(animeList);
  }, [animeList]);

  return (
    <ScrollView style={cartStyles.container}>
      {animeList.map((anime) => (
        <View key={anime._id} style={cartStyles.animeItem}>
          <View>
            <Image source={{ uri: anime.image }} style={cartStyles.thumbnail} resizeMode="contain" />
            <TouchableOpacity
              style={cartStyles.buyButton}
              onPress={() => handleBuyAnime(anime._id, anime.price)}
            >
              <Text style={cartStyles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
          <View style={cartStyles.animeDetails}>
            <Text style={cartStyles.animeTitle}>{anime.title}</Text>
            <Text style={cartStyles.genres}>{anime.genres.join(', ')}</Text>
            <Text style={cartStyles.synopsis}>{anime.synopsis}</Text>
            <View style={cartStyles.additional}>
              <Text style={cartStyles.dets}>Type: {anime.type}</Text>
              <Text style={cartStyles.dets}>Episodes: {anime.episodes}</Text>
              <Text style={cartStyles.dets}>Ranking: {anime.ranking}</Text>
              <Text style={cartStyles.dets}>Status: {anime.status}</Text>
            </View>
            <Text style={cartStyles.price}>Price: {anime.price}</Text>
          </View>
          <TouchableOpacity
            style={cartStyles.removeButton}
            onPress={() => handleRemoveAnime(anime._id)}
          >
            <Text style={cartStyles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default CartScreen;
