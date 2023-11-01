const initialState = {
  animeList: [],
};

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ANIME':
      return {
        ...state,
        animeList: [...state.animeList, action.payload],
      };
    case 'REMOVE_ANIME':
      return {
        ...state,
        
        animeList: state.animeList.filter((anime) => anime._id !== action.payload),
      };
    case "SET_ANIME_LIST":
    return {
      ...state,
      animeList: action.payload,
    };
    default:
      return state;
  }
};

export default animeReducer;
