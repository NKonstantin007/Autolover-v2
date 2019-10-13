import {handleActions} from 'redux-actions';

import {
    fetchSignUpRequest,
    fetchSignUpSuccess,
    fetchSignUpFailure
} from './actions';

const defaultState = {
    isFetching: false,
    error: null,
    userName: null
};

export default handleActions({
    [fetchSignUpRequest](state) {
        return {
            ...state,
            error: null,
            isFetching: true,
            userName: null
        };
    },
    [fetchSignUpSuccess](state, {payload: {name}}) {
        return {
            ...state,
            error: null,
            isFetching: false,
            userName: name
        };
    },
    [fetchSignUpFailure](state, { payload }) {
        return {
            ...state,
            isFetching: false,
            error: payload
        };
    }

}, defaultState);