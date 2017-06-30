import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import animeReducer from './animeReducer';
import animeSearchReducer from './animeSearchReducer';

export default combineReducers({
  animes: animeReducer,
  animeSearchKeyword: animeSearchReducer,
  router: routerReducer,
});
