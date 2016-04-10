import Axios from 'axios';
import Moment from 'moment';

export const POSTS_LOAD_PENDING = 'POSTS_LOAD_PENDING';
export const POSTS_LOAD_SUCCESS = 'POSTS_LOAD_SUCCESS';
export const POSTS_LOAD_FAILURE = 'POSTS_LOAD_FAILURE';
export const POST_LOAD_PENDING = 'POST_LOAD_PENDING';
export const POST_LOAD_SUCCESS = 'POST_LOAD_SUCCESS';
export const POST_LOAD_FAILURE = 'POST_LOAD_FAILURE';

function isLoading(state) {
  const { loading } = state.posts;
  return loading;
}

function isUpdateNeeds(state, updatePeriod) {
  const { lastUpdate } = state.posts;
  return lastUpdate
          ? Moment().diff(Moment().valueOf(), lastUpdate) > updatePeriod * 1000
          : true;
}

export function fetchPosts() {
  return {
    type: POSTS_LOAD_PENDING,
  };
}

export function receivePosts(data) {
  return {
    type: POSTS_LOAD_SUCCESS,
    data,
  };
}

export function failPosts(error) {
  return {
    type: POSTS_LOAD_FAILURE,
    error,
  };
}

export function fetchPost() {
  return {
    type: POST_LOAD_PENDING,
  };
}

export function receivePost(data) {
  return {
    type: POST_LOAD_SUCCESS,
    data,
  };
}

export function failPost(error) {
  return {
    type: POST_LOAD_FAILURE,
    error,
  };
}

export function loadPosts() {
  return (dispatch, getState) => {
    if (!isLoading(getState()) && isUpdateNeeds(getState(), 10000)) {
      dispatch(fetchPosts());

      Axios.get(`http://jsonplaceholder.typicode.com/posts/`)
        .then(response => {
          dispatch(receivePosts(response.data));
        })
        .catch(response => {
          dispatch(failPosts(response.data));
        });
    }
  };
}

export function loadPost(id) {
  return (dispatch, getState) => {
    if (!isLoading(getState())) {
      dispatch(fetchPost());
    }

    Axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        dispatch(receivePost(response.data));
      })
      .catch(response => {
        dispatch(failPost(response.data));
      });
  };
}
