import { combineReducers } from 'redux';

const data1 = (state = [], action) => {
  switch (action.type) {
    case 'ACTION_TYPE_1': {
      return state;
    }
    case 'ACTION_TYPE_2': {
      return state;
    }
    default:
      return state;
  }
};

const data2 = (state = [], action) => {
  switch (action.type) {
    case 'ACTION_TYPE_3': {
      return state;
    }
    case 'ACTION_TYPE_4': {
      return state;
    }
    default:
      return state;
  }
};

export default combineReducers({
  data1,
  data2,
});
