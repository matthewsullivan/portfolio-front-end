module.exports = {
  apps: [
    {
      name: 'Mail Server',
      script: 'server.js',

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        MAIL_USER: 'localhost@localhost.com',
        MAIL_PASS: 'letmein',
        URL_ORIGIN: 'http://127.0.0.1:4444',
      },
      env_production: {
        NODE_ENV: 'production',
        MAIL_USER: 'ADD CREDENTAILS',
        MAIL_PASS: 'ADD CREDENTAILS',
        URL_ORIGIN: 'https://matthewsullivan.media',
      },
      env_staging: {
        NODE_ENV: 'staging',
        MAIL_USER: 'localhost@localhost.com',
        MAIL_PASS: 'letmein',
        URL_ORIGIN: 'https://staging.matthewsullivan.media',
      },
    },
  ],

  deploy: {
    production: {
      user: 'node',
      host: '67.205.11.157',
      ref: 'origin/master',
      repo: 'https://github.com/matthewsullivan/portfolio-front-end.git',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
