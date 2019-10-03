import { createStore, combineReducers } from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const store = createStore(
    combineReducers(rootReducer),
    initialState,
    applyMiddleware(thunk)
    );

export default store;