import Alert from 'react-s-alert';

const showResponseError = (error) => {
const res = error.response;
  if (!res) {
      return null;
  }
  if (typeof res.data === 'string') {
    return Alert.error(res.data);
  }
  if (res.data.message && typeof res.data.message === 'string') {
    return Alert.error(res.data.message);
  }
  return Alert.error('Неизвестная ошибка на сервере');
};

export default showResponseError;