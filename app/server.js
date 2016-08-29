'use strict';

const express   = require('express'),
      parser    = require('body-parser'),
      swig      = require('swig'),
      helmet    = require('helmet'),
      session   = require('express-session'),
      estaticos = require('./middlewares/staticos'),
      Rutas     = require('./website/controllers/rutas'),
      dev       = process.env.DEV;

class Server {
  constructor(config){
    this.config = config || {};
    this.app = express();
    this.app.use(helmet());
    this.app.use(parser.json());
    this.app.use(parser.urlencoded({extended:true}));
    this.app.use(estaticos);
    this.app.engine('html', swig.renderFile);
    this.app.set('view engine', 'html');
    this.app.set('views', __dirname + '/website/views/templates');
    swig.setDefaults({cache:false, varControls:['¿¿','??']});

    if(dev == 'devop'){
      this.app.set('view cache', false);
    }
    const ruteo = new Rutas(this.app);
    ruteo.gets();
  }
}

module.exports = Server;
