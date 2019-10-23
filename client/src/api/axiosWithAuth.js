import authApi from './authApi';

/**
 * Done request to server and before token refreshes
 * @param {Callback} callback request that need authorization
 * @return {Request} result of request 
 */
export async function axiosWithAuth(callback) {
    try {
        if(localStorage.getItem('autoloverToken')) {
            const response = await authApi.refreshToken();
            const token = response.data.token;
            localStorage.setItem('autoloverToken', token);
            return callback();
        }
        else {
            console.log('Ошибка авторизации');
        }
    }
    catch (err) {
        console.log(err.response);
    }
}