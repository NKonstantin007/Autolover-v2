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
    updateCurrentUserFailure,
    updateAvatarCurrentUserRequest,
    updateAvatarCurrentUserSuccess,
    updateAvatarCurrentUserFailure
} from './acitons';

const defaultState = {
    isFetching: false,
    error: null,
    isAuth: false,
    user: null
};

const errorActionHandler = (state, {payload}) => {
    return {
        ...state,
        error: payload,
        isFetching: false
    }
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
    [fetchCurrentUserFailure]: errorActionHandler,
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
            user: payload,
        };
    },
    [updateCurrentUserFailure]: errorActionHandler,
    [updateAvatarCurrentUserRequest]: (state) => {
        return {
            ...state,
            isFetching: true,
            error: null
        };
    },
    [updateAvatarCurrentUserSuccess]: (state, {payload}) => {
        return {
            ...state,
            isFetching: false,
            user: {
                ...state.user,
                avatar: payload
            }
        }
    },
    [updateAvatarCurrentUserFailure]: errorActionHandler
}, defaultState);