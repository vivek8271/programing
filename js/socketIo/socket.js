const http = require('http');
const { Server } = require('socket.io');
const express = require('express');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (data) => {
    console.log('Received message:', data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  })
})

// console.log('Socket.IO server is running');
app.get('/', (req, res) => {
  // console.log('Received a GET request at /');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  // res.send(`<h1>Socket.io running</h1>`)
})

server.listen(8000, () => console.log('Server is running on port 8080'));