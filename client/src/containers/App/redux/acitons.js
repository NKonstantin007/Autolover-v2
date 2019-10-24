import {createAction} from 'redux-actions';

import userApi from '../../../api/userApi';

export const fetchCurrentUserRequest = createAction('FETCH_CURRENT_USER_REQUEST');
export const fetchCurrentUserSuccess = createAction('FETCH_CURRENT_USER_SUCCESS');
export const fetchCurrentUserFailure = createAction('FETCH_CURRENT_USER_FAILURE');

export const fetchCurrentUser = () => async (dispatch) => {
    try {
        dispatch(fetchCurrentUserRequest());
        if(localStorage.getItem('autoloverToken')) {
            const response = await userApi.getCurrent();
            const user = response.data;
            dispatch(fetchCurrentUserSuccess(user));
        }
        else {
            console.log('Войдите в свой профиль или зарегистрируйтесь!');
            dispatch(fetchCurrentUserFailure('Войдите в свой профиль или зарегистрируйтесь!'));
        }
    }
    catch(err) {
        console.log(err);
        dispatch(fetchCurrentUserFailure(err));
    }
}