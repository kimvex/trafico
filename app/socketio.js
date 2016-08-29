'use strict';

const socket = require('socket.io');

class SocketIo{
  constructor(config){
    this.config = config || {};
    this.io = socket.listen(config.servidor);
  }

  canales(){
    this.io.on('connection',(socket)=>{
      socket.on('coor',(data)=>{
        console.log(data);
      });
    });
  }
}

module.exports = SocketIo;
