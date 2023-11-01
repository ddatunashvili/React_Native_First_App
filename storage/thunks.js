import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAnimeList } from './actions';

export const loadAnimeList = () => {
  return async (dispatch) => {
    try {
      const serializedAnimeList = await AsyncStorage.getItem('animeList');
      if (serializedAnimeList) {
        const storedAnimeList = JSON.parse(serializedAnimeList);
        dispatch(setAnimeList(storedAnimeList));
        console.log('Anime list loaded from storage');
      }
    } catch (error) {
      console.error('Failed to load anime list from storage:', error);
    }
  };
};

export default loadAnimeList;
