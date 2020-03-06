module.exports = {
  apps: [
    {
      autorestart: true,
      env_production: {
        MAIL_USER: '[ADD_CREDENTAILS]',
        MAIL_PASS: '[ADD_CREDENTAILS]',
        NODE_ENV: 'production',
        URL_ORIGIN: 'https://www.matthewsullivan.media',
      },
      instances: 1,
      max_memory_restart: '1G',
      name: 'production',
      script: 'server.js',
      watch: false,
    },
    {
      autorestart: true,
      env_staging: {
        MAIL_USER: '[ADD_CREDENTAILS]',
        MAIL_PASS: '[ADD_CREDENTAILS]',
        NODE_ENV: 'staging',
        URL_ORIGIN: 'https://www.staging.matthewsullivan.media',
      },
      instances: 1,
      max_memory_restart: '1G',
      name: 'staging',
      script: 'server.js',
      watch: false,
    },
  ],
};
