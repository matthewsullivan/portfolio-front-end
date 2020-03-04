module.exports = {
  apps: [
    {
      autorestart: true,
      env: {
        MAIL_USER: 'localhost@localhost.com',
        MAIL_PASS: 'letmein',
        NODE_ENV: 'development',
        URL_ORIGIN: 'http://127.0.0.1:8080',
      },
      env_production: {
        MAIL_USER: '[ADD_CREDENTAILS]',
        MAIL_PASS: '[ADD_CREDENTAILS]',
        NODE_ENV: 'production',
        URL_ORIGIN: 'https://www.matthewsullivan.media',
      },
      env_staging: {
        MAIL_USER: '[ADD_CREDENTAILS]',
        MAIL_PASS: '[ADD_CREDENTAILS]',
        NODE_ENV: 'staging',
        URL_ORIGIN: 'https://www.staging.matthewsullivan.media',
      },
      instances: 1,
      max_memory_restart: '1G',
      name: 'MSM Server',
      script: 'server.js',
      watch: false,
    },
  ],
};
