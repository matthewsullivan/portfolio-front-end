module.exports = {
  apps: [
    {
      autorestart: true,
      env: {
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
