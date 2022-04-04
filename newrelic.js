'use strict';

exports.config = {
  allow_all_headers: true,
  app_name: ['porfolio-front-end'],
  attributes: {
    exclude: [
      'response.headers.authorization',
      'response.headers.cookie',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*',
      'request.headers.authorization',
      'request.headers.cookie',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
    ],
  },
  distributed_tracing: {
    enabled: true,
  },
  license_key: process.env.NEW_RELIC_LICENSE_KEY,
  logging: {
    level: 'info',
  },
};
