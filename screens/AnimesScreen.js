import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Linking, RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addAnime } from '../storage/actions';
import styles from '../styles/styles';

const AnimesScreen = () => {
  const [animeData, setAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const animeList = useSelector((state) => state.animeList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAnimeData();
  }, []);

  const fetchAnimeData = async () => {
    try {
      const response = await axios.get('http://192.168.1.187:5000/animes');
      setAnimeData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      Alert.alert('Failed to fetch data');
      setIsLoading(false);
    }
  };

  const handleAnimePress = (anime) => {
    const isAlreadyAdded = animeList.some((addedAnime) => addedAnime._id === anime._id);
    if (!isAlreadyAdded) {
      Alert.alert(anime.title, 'Anime added');
      dispatch(addAnime(anime));
    }
  };

  const handleSourcePress = async (link) => {
    try {
      await Linking.openURL(link);
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = () => {
    fetchAnimeData();
  };

  const toLowerCase = (str) => {
    return str ? str.toLowerCase() : '';
  };

  const searchAnime = () => {
    const filteredAnime = animeData.filter((anime) => toLowerCase(anime.title).includes(toLowerCase(searchText)));
    setAnimeData(filteredAnime);
  };

  const resetSearch = () => {
    setSearchText('');
    fetchAnimeData();
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      fetchAnimeData();
    } else {
      const filteredAnime = animeData.filter((anime) => anime.genres.some((genre) => toLowerCase(genre) === toLowerCase(category)));
      setAnimeData(filteredAnime);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search anime..."
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={searchAnime}
        />
        <TouchableOpacity style={styles.searchButton} onPress={resetSearch}>
          <Text style={styles.searchButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        {['All', 'Action', 'fantasy', 'Adventure'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonSelected,
            ]}
            onPress={() => filterByCategory(category)}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
      >
        {animeData.map((anime) => (
          <TouchableOpacity
            key={anime._id}
            style={styles.animeItem}
            onPress={() => handleAnimePress(anime)}
          >
            <Image source={{ uri: anime.image }} style={styles.thumbnail} resizeMode="contain" />
            <View style={styles.animeDetails}>
              <Text style={styles.title}>{anime.title}</Text>
              <Text style={styles.genres}>{anime.genres.join(', ')}</Text>
              <Text style={styles.synopsis}>{anime.synopsis}</Text>
              <View style={styles.additional}>
                <Text style={styles.dets}>Type: {anime.type}</Text>
                <Text style={styles.dets}>Episodes: {anime.episodes}</Text>
                <Text style={styles.dets}>Ranking: {anime.ranking}</Text>
                <Text style={styles.dets}>Status: {anime.status}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.sourceButton}
                onPress={() => handleSourcePress(anime.link)}
              >
                <Text style={styles.sourceButtonText}>Source</Text>
              </TouchableOpacity>
              <Text style={styles.price}>Price: {anime.price}</Text>
              {animeList.some((addedAnime) => addedAnime._id === anime._id) ? (
                <Image source={require('../assets/favouriteChecked.png')} style={styles.fav} />
              ) : (
                <Image source={require('../assets/favourite.png')} style={styles.fav} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AnimesScreen;
