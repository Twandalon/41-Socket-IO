'use strict';

let express = require('express');
let app = express();

let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static('./src'));

io.on('connection', (socket) => {
  console.log('USER HAS JOINED THE CHANNEL ᕕ( ᐛ )ᕗ', socket.id);

  socket.on('disconnect', () => {
    console.log('USER HAS LEFT THE CHANNEL ( ._.)', socket.id);
  });

  socket.on('send-message', (data) => {
    console.log('MESSAGE: ', data.message);
    io.emit('receive-message', data);
  });
});

let port = 3000;

http.listen(port, () => {
  console.log('localhost:' + port);
});
