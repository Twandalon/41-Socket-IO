'use strict';

let express = require('express');
let app = express();

let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static('./src'));

const USERS = {};

io.on('connection', (socket) => {
  USERS[socket.id] = {};
  USERS[socket.id].username = 'lurker';

  console.log('USER HAS JOINED THE CHANNEL ᕕ( ᐛ )ᕗ', socket.id);

  socket.on('disconnect', () => {
    console.log('USER HAS LEFT THE CHANNEL ( ._.)', socket.id);
  });

  socket.on('send-message', (data) => {
    data.username = USERS[socket.id].username;
    data.timestamp = new Date();
    console.log('MESSAGE: ', data.message);
    io.emit('receive-message', data);
  });

  socket.on('set-username', (data) => {
    USERS[socket.id].username = data.username;
  });
});

let port = 3000;

http.listen(port, () => {
  console.log('localhost:' + port);
});
