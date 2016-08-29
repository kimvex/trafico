'use strict';

const cat = require('catlistener');

cat.server({
  enviroment: {
    DEV: 'devop'
  },
  node: 'supervisor',
  debug: '-debug',
  app: 'app.js'
});
