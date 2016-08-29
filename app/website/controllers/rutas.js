'use strict';

class Rutas{
  constructor(config){
    this.config = config || {};
    this.app = this.config;
  }

  gets(){
    this.app.get('/',(sol, res)=>{
      res.render('index');
    });
  }
}

module.exports = Rutas;
