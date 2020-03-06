let api = 'http://127.0.0.1:8080';

if (process.env.REACT_APP_ENV === 'production') {
  api = 'https://www.matthewsullivan.media';
} else if (process.env.REACT_APP_ENV === 'staging') {
  api = 'https://www.staging.matthewsullivan.media';
}

export default api;
