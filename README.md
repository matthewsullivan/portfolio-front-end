
## Install

Install Project Dependencies

    $ npm install

## Setup

Setup Environment

    $ export NODE_ENV=development

Update Mail Server Credentials

    $ vim ecosystem.config.js
    
Start Mail Server

    $ pm2 start ecosystem.config.js

## Serve

    $ npm run start