import {handleActions} from 'redux-actions';

import {
    fetchSignInRequest,
    fetchSignInSuccess,
    fetchSignInFailure
} from './actions';

const defaultState = {
    isFetching: false,
    error: null,
    isAuth: false,
    user: null
};

export default handleActions({
    [fetchSignInRequest](state) {
        return {
            ...state,
            error: null,
            isFetching: true,
            user: null
        };
    },
    [fetchSignInSuccess](state, {payload}) {
        return {
            ...state,
            error: null,
            isFetching: false,
            user: payload,
            isAuth: true
        };
    },
    [fetchSignInFailure](state, { payload }) {
        return {
            ...state,
            isFetching: false,
            error: payload
        };
    }

}, defaultState);