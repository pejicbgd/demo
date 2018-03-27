import * as actionTypes from 'app/constants/actionTypes';

const loadPosts = selected => ({
  type: actionTypes.GET_ITEMS,
  selected
});

export const fetchItems = selected => dispatch => {
  const data = require(`../../data/${selected}.json`); 
  return dispatch(recieveItems(data));
};

export const setSelected = selected => dispatch => {
  type: actionTypes.SET_SELECTED,
  selected
};