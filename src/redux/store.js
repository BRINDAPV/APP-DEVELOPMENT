import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import toyReducer from './toyReducers';// Ensure this path is correct

const store = createStore(toyReducer, composeWithDevTools());

export default store;
