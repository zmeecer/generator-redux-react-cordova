export const SEARCH_CHANGE = 'SEARCH_CHANGE';

export function changeSearch(phrase) {
  return {
    type: SEARCH_CHANGE,
    data: phrase,
  };
}
