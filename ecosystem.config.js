module.exports = {
  apps: [
    {
      autorestart: true,
      env: {
        NODE_ENV: 'development',
        MAIL_USER: 'localhost@localhost.com',
        MAIL_PASS: 'letmein',
        URL_ORIGIN: 'http://127.0.0.1:8080',
      },
      env_production: {
        NODE_ENV: 'production',
        MAIL_USER: '[ADD_CREDENTAILS]',
        MAIL_PASS: '[ADD_CREDENTAILS]',
        URL_ORIGIN: 'https://www.matthewsullivan.media',
      },
      env_staging: {
        NODE_ENV: 'staging',
        MAIL_USER: '[ADD_CREDENTAILS]',
        MAIL_PASS: '[ADD_CREDENTAILS]',
        URL_ORIGIN: 'https://www.staging.matthewsullivan.media',
      },
      instances: 1,
      name: 'MSM Server',
      max_memory_restart: '1G',
      script: 'server.js',
      watch: false,
    },
  ],
};
