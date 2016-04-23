import { combineReducers } from 'redux';

import { search } from './search';
import { posts } from './posts';
import { features } from './features';

const combinedReducer = combineReducers({
  features,
  search,
  posts,
});

export default combinedReducer;
