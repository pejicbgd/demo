import { combineReducers } from 'redux';

const handleSelected = (state = 'users', action) => {
  switch (action.type) {
    case actionTypes.GET_SELECTED:
    case actionTypes.SET_SELECTED:
      return action.selected;

    default:
      return state;
  }
};

const getItems = (state = { }, action) => {
  switch (action.type) {

    case actionTypes.RECIEVE_ITEMS:
    return {
      ...state,
      items: action.items
    };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  getItems,
  handleSelected
})

export default rootReducer
