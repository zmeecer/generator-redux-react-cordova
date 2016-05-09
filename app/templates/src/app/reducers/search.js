import {
  SEARCH_CHANGE,
} from '../actions/search';

const initialState = {
  phrase: '',
};

export function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CHANGE:
      return {
        ...state,
        phrase: action.data,
      };
    default:
      return state;
  }
}
