import {createAction} from 'redux-actions';
import authApi from '../../../api/authApi';

export const fetchSignUpRequest = createAction('FETCH_SIGN_UP_REQUEST');
export const fetchSignUpSuccess = createAction('FETCH_SIGN_UP_SUCCESS');
export const fetchSignUpFailure = createAction('FETCH_SIGN_UP_FAILURE');

export const fetchSignUp = (user) => async (dispatch) => {
    try {
        dispatch(fetchSignUpRequest());
        const response = await authApi.signUp(user);
        dispatch(fetchSignUpSuccess(response.data));
    }
    catch(err) {
        dispatch(fetchSignUpFailure(err));
        console.error(err);
    }
};