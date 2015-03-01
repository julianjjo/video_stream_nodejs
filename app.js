var io = require('socket.io')(8080);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('imagen', function (img) {
      socket.broadcast.emit('imagen', img);
  });
})