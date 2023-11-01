import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadAnimeList } from '../storage/thunks';

const BooksScreen = () => {
  const [budget, setBudget] = useState('');
  const animeList = useSelector((state) => state.animeList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAnimeList());
  }, [dispatch]);

  const saveAnimeListToStorage = async (updatedAnimeList) => {
    try {
      await AsyncStorage.setItem('animeList', JSON.stringify(updatedAnimeList));
      console.log('Anime list saved to storage');
    } catch (error) {
      console.error('Failed to save anime list to storage:', error);
    }
  };

  useEffect(() => {
    saveAnimeListToStorage(animeList);
  }, [animeList]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bought Animes:</Text>
      <View style={styles.animeList}>
        {animeList.map((anime) => (
          <View key={anime._id} style={styles.animeItem}>
            <Text style={styles.animeTitle}>{anime.title}</Text>
            {/* Add other anime details as needed */}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  animeList: {
    flex: 1,
  },
  animeItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  animeTitle: {
    fontSize: 16,
  },
});

export default BooksScreen;
