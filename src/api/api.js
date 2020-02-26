let api = 'https://www.matthewsullivan.media';

if (process.env.NODE_ENV === 'development') {
  api = 'http://127.0.0.1:8080';
} else if (process.env.REACT_APP_ENV === 'staging') {
  api = 'https://www.staging.matthewsullivan.media';
}

export default api;
