import {createAction} from 'redux-actions';
import authApi from '../../../api/authApi';

export const fetchSignInRequest = createAction('FETCH_SIGN_IN_REQUEST');
export const fetchSignInSuccess = createAction('FETCH_SIGN_IN_SUCCESS');
export const fetchSignInFailure = createAction('FETCH_SIGN_IN_FAILURE');

export const fetchSignIn = (user, history) => async (dispatch) => {
    try {
        dispatch(fetchSignInRequest());
        const {data} = await authApi.signIn(user);
        localStorage.setItem('autoloverToken', data.token);
        dispatch(fetchSignInSuccess(data.user));
        history.push('/');
    }
    catch(err) {
        dispatch(fetchSignInFailure(err));
        console.error(err);
    }
};