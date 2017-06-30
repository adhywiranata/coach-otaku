import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import animeReducer from './animeReducer';

export default combineReducers({
  animes: animeReducer,
  router: routerReducer,
});
