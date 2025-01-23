// src/store.js
import { createStore } from 'redux';

// A simple reducer function (replace with your own reducers)
const initialState = {
  user: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// Create Redux store
const store = createStore(rootReducer);

export { store };
