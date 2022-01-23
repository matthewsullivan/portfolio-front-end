let api = 'http://127.0.0.1:8080';

if (
  process.env.REACT_APP_ENV === 'production' ||
  process.env.REACT_APP_ENV === 'staging'
) {
  api = '';
}

export default api;
