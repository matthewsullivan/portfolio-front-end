module.exports = {
  apps: [
    {
      args: 'one two',
      autorestart: true,
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
        MAIL_USER: 'ADD CREDENTAILS',
        MAIL_PASS: 'ADD CREDENTAILS',
        URL_ORIGIN: 'https://staging.matthewsullivan.media',
      },
      instances: 1,
      name: 'Mail Server',
      max_memory_restart: '1G',
      script: 'server.js',
      watch: false,
    },
  ],

  deploy: {
    production: {
      host: '67.205.11.157',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      ref: 'origin/master',
      repo: 'https://github.com/matthewsullivan/portfolio-front-end.git',
      user: 'node',
    },
  },
};
