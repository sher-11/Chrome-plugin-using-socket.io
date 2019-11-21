const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.sockets.on('connection', function(socket) {
	console.log('User connected')

    socket.on('message', function(data) {
        console.log(data)
        io.emit('respond', data);
    });
});

const server = http.listen(3000, function() {
    console.log('Running on port 3000');
});
