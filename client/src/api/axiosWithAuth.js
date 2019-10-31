import authApi from './authApi';
import showResponseError from '../utils/showResponseError'

/**
 * Done request to server and before token refreshes
 * @param {Callback} callback request that need authorization
 * @return {Request} result of request 
 */
const axiosWithAuth = (callback) => async (body) => {
    if(localStorage.getItem('autoloverToken')) {
        const response = await authApi.refreshToken();
        const token = response.data.token;
        localStorage.setItem('autoloverToken', token);
        return callback(body);
    }
    else {
        showResponseError('Ошибка авторизации');
    }
}
export default axiosWithAuth;