const { emit } = require("nodemon");
const { Socket } = require("socket.io");


const socketController = (socket) => {

    console.log('client connected', socket.id);

    socket.on('disconnect', () => { console.log("Disconect", Socket.id);})

    /*socket.on("enviar-mensaje", (payload) => {
      this.io.emit("enviar-mensaje", payload)
    })*/


    socket.on("enviar-mensaje", (payload, callback) => {
      const id = 1234567;
      callback(id)

      socket.broadcast.emit("enviar-mensaje", payload)

    })
  }

module.exports = {
    socketController,
}