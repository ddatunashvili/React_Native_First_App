export const addAnime = (anime) => {
    return {
      type: 'ADD_ANIME',
      payload: anime,
    };
  };
  
  export const removeAnime = (animeId) => {
    return {
      type: 'REMOVE_ANIME',
      payload: animeId,
    };
  };
  
  // actions.js

export const setAnimeList = (animeList) => {
  return {
    type: 'SET_ANIME_LIST',
    payload: animeList,
  };
};
