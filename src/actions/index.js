import * as actionTypes from 'app/constants';

const loadItems = selected => ({
  type: actionTypes.LOAD_ITEMS,
  selected
});

const recieveItems = items => ({
  type: actionTypes.RECIEVE_ITEMS,
  items
});

export const fetchItems = selected => dispatch => {
  dispatch(loadItems(selected));
  const data = require(`../../data/${selected}.json`);
  return dispatch(recieveItems(data));
};

export const setSelected = selected => dispatch => ({
  type: actionTypes.SET_SELECTED,
  selected
});
