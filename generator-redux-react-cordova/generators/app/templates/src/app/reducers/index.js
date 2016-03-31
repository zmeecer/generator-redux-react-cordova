import { combineReducers } from 'redux';

import { posts } from './posts';

const combinedReducer = combineReducers({
  posts,
});

export default combinedReducer;
