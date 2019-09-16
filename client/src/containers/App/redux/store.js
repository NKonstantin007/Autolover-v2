import { createStore } from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initialState = {};

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
    );

export default store;