/* eslint valid-jsdoc: "off" */

'use strict';

const REDIS_PORT = 6379
const REDIS_HOST = '127.0.0.1'
const REDIS_PWD = ''

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1695492272471_1668';

  // add your middleware config here
  config.middleware = [];

  //add websocket
  config.io = {
    namespace: {
      '/': {
        connectionMiddleware: ['auth'],
        packetMiddleware: ['filter'],
      },

    },
  }
  config.redis = {
    client: {
      port: REDIS_PORT,          // Redis port
      host: REDIS_HOST,   // Redis host
      password: REDIS_PWD,
      db: 0,
    },
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
