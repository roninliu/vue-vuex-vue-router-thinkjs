'use strict';

/**
 * session configs
 */
export default {
  name: 'vuejs',
  type: 'file',
  secret: 'B76X~39#',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.RUNTIME_PATH + '/session',
    }
  }
};