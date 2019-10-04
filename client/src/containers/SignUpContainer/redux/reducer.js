import {handleActions} from 'redux-actions';

import {
    fetchSignUpRequest,
    fetchSignUpSuccess,
    fetchSignUpFailure
} from './actions';

const defaultState = {
    isFetching: false,
    error: null
}

export default handleActions({
    [fetchSignUpRequest](state) {
        return {
            error: null,
            isFetching: true,
        };
    },
    [fetchSignUpSuccess](state) {
        return {
            error: null,
            isFetching: false
        };
    },
    [fetchSignUpFailure](state, { payload }) {
        return {
            isFetching: false,
            error: payload
        };
    }

}, defaultState);