import {handleActions} from 'redux-actions';

import {
    fetchCurrentUserRequest,
    fetchCurrentUserSuccess,
    fetchCurrentUserFailure,
    signOutCurrentUserRequest,
    signOutCurrentUserSuccess,
    signOutCurrentUserFailure,
    updateCurrentUserRequest,
    updateCurrentUserSuccess,
    updateCurrentUserFailure
} from './acitons';

const defaultState = {
    isFetching: false,
    error: null,
    isAuth: false,
    user: null
};

export default handleActions({
    [fetchCurrentUserRequest]: (state) => {
        return {
            ...state,
            isFetching: true,
            error: null
        };
    },
    [fetchCurrentUserSuccess]: (state, {payload}) => {
        return {
            ...state,
            user: payload,
            isAuth: true,
            isFetching: false,
        }
    },
    [fetchCurrentUserFailure]: (state, {payload}) => {
        return {
            ...state,
            error: payload,
            isFetching: false
        }
    },
    [signOutCurrentUserRequest]: (state) => {
        return {
            ...state,
            isFetching: true,
            error: null
        }
    },
    [signOutCurrentUserSuccess]: (state) => {
        return {
            ...state,
            user: null,
            isAuth: false,
            isFetching: false,
        };
    },
    [signOutCurrentUserFailure]: (state) => {
        return {
            ...state,
            user: null,
            isAuth: false,
            isFetching: false,
        };
    },
    [updateCurrentUserRequest]: (state) => {
        return {
            ...state,
            isFetching: true,
            error: null
        };
    },
    [updateCurrentUserSuccess]: (state, {payload}) => {
        return {
            ...state,
            isFetching: false,
            user: payload
        };
    },
    [updateCurrentUserFailure]: (state, {payload}) => {
        return {
            ...state,
            isFetching: false,
            error: payload
        };
    }
}, defaultState);