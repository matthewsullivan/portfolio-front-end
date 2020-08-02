module.exports = {
  apps: [
    {
      autorestart: true,
      env: {
        MAIL_USER: '[ADD_CREDENTAILS]',
        MAIL_PASS: '[ADD_CREDENTAILS]',
        NODE_ENV: 'production',
        SECRET_KEY: '[ADD_SECRET]',
        SITE_KEY: '6LcgcrkZAAAAAK6lWILukveUvv_j6GMAx00azBw_',
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
      env: {
        MAIL_USER: '[ADD_CREDENTAILS]',
        MAIL_PASS: '[ADD_CREDENTAILS]',
        NODE_ENV: 'staging',
        SECRET_KEY: '[ADD_SECRET]',
        SITE_KEY: '6LcgcrkZAAAAAK6lWILukveUvv_j6GMAx00azBw_',
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
