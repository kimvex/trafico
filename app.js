'use strict';

const http    = require('http'),
      Serve   = require('./app/server'),
      socket  = require('./app/socketio.js');

const app = new Serve();

const servidor = http.createServer(app.app);

servidor.listen(5000, ()=> console.log('Servidor ejecutandose en el puerto 5000!'));

const io = new socket({servidor: servidor});
io.canales();
