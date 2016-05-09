import Moment from 'moment';
import {
  POSTS_LOAD_PENDING, POSTS_LOAD_SUCCESS, POSTS_LOAD_FAILURE,
  POST_LOAD_PENDING, POST_LOAD_SUCCESS, POST_LOAD_FAILURE,
} from '../actions/posts';

const initialState = {
  loading: false,
  lastUpdate: null,
  error: '',
  posts: [],
  currentPost: null,
};

export function posts(state = initialState, action) {
  switch (action.type) {
    case POSTS_LOAD_PENDING:
      return {
        ...state,
        posts: initialState.posts, // reset
        loading: true,
        error: '',
      };
    case POSTS_LOAD_SUCCESS:
      return {
        ...state,
        lastUpdate: Moment().valueOf(),
        posts: action.data,
        loading: false,
        error: '',
      };
    case POSTS_LOAD_FAILURE:
      return {
        ...state,
        posts: initialState.posts, // reset
        loading: false,
        error: action.error,
      };
    case POST_LOAD_PENDING:
      return {
        ...state,
        currentPost: initialState.currentPost,
        loading: true,
        error: '',
      };
    case POST_LOAD_SUCCESS:
      return {
        ...state,
        currentPost: action.data,
        loading: false,
        error: '',
      };
    case POST_LOAD_FAILURE:
      return {
        ...state,
        currentPost: initialState.currentPost, // reset
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
