import {createAction} from 'redux-actions';
import Alert from 'react-s-alert';

import userApi from '../../../api/userApi';
import showResponseError from '../../../utils/showResponseError';

export const fetchCurrentUserRequest = createAction('FETCH_CURRENT_USER_REQUEST');
export const fetchCurrentUserSuccess = createAction('FETCH_CURRENT_USER_SUCCESS');
export const fetchCurrentUserFailure = createAction('FETCH_CURRENT_USER_FAILURE');

export const signOutCurrentUserRequest = createAction('SIGN_OUT_CURRENT_USER_REQUEST');
export const signOutCurrentUserSuccess = createAction('SIGN_OUT_CURRENT_USER_SUCCESS');
export const signOutCurrentUserFailure = createAction('SIGN_OUT_CURRENT_USER_FAILURE');

export const updateCurrentUserInfoRequest = createAction('UPDATE_CURRENT_USER_REQUEST');
export const updateCurrentUserInfoSuccess = createAction('UPDATE_CURRENT_USER_SUCCESS');
export const updateCurrentUserInfoFailure = createAction('UPDATE_CURRENT_USER_FAILURE');

export const updateAvatarCurrentUserRequest = createAction('UPDATE_AVATAR_CURRENT_USER_REQUEST');
export const updateAvatarCurrentUserSuccess = createAction('UPDATE_AVATAR_CURRENT_USER_SUCCESS');
export const updateAvatarCurrentUserFailure = createAction('UPDATE_AVATAR_CURRENT_USER_FAILURE');

export const fetchCurrentUser = () => async (dispatch) => {
    try {
        dispatch(fetchCurrentUserRequest());
        if(localStorage.getItem('autoloverToken')) {
            const response = await userApi.getCurrent();
            const user = response.data;
            dispatch(fetchCurrentUserSuccess(user));
        }
        else {
            Alert.warning('Войдите в свой профиль или зарегистрируйтесь!')
            console.log('Токен не активен');
            dispatch(fetchCurrentUserFailure('Войдите в свой профиль или зарегистрируйтесь!'));
        }
    }
    catch(err) {
        showResponseError(err);
        console.log(err);
        dispatch(fetchCurrentUserFailure(err));
    }
}

export const signOutCurrentUser = (history) => async (dispatch) => {
    try {
        dispatch(fetchCurrentUserRequest());
        await userApi.signOutCurrentUser();
        localStorage.removeItem('autoloverToken');
        dispatch(signOutCurrentUserSuccess());
        history.push('/signin');
    }
    catch(err) {
        showResponseError(err);
        console.log(err);
        dispatch(signOutCurrentUserFailure(err));
    }
}
/**
 * Update user properties name and aboutMe
 * @param {{name, aboutMe}} info 
 */
export const updateCurrentUserInfo = (info) => async (dispatch) => {
    try {
        dispatch(updateCurrentUserInfoRequest());
        const response = await userApi.updateCurrentUserInfo(info);
        dispatch(updateCurrentUserInfoSuccess(response.data));
    }
    catch(err) {
        showResponseError(err);
        console.log(err);
        dispatch(updateCurrentUserInfoFailure(err));
    }
}

export const updateAvatarCurrentUser = (avatar) => async (dispatch) => {
    try {
        dispatch(updateAvatarCurrentUserRequest(avatar));
        const response = await userApi.updateAvatarCurrentUser(avatar);
        dispatch(updateAvatarCurrentUserSuccess(response.data));
    }
    catch(err) {
        showResponseError(err);
        console.log(err);
        dispatch(updateAvatarCurrentUserFailure(err));
    }
}