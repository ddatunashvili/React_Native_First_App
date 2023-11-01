// import { createStore } from 'redux';
// import animeReducer from '../storage/reducers';

// const store = createStore(animeReducer);

// export default store;


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
