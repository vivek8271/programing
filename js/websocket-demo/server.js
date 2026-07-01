const ws = require('ws');

const wss = new ws.Server({ port: 8080 });

console.log('WebSocket server is running on port 8080');
 
wss.on('connection', (w)=>{
  console.log('A user connected');

  w.send('Welcome to the WebSocket server!');

  w.on("message", (data)=>{
    console.log('Received message:', data.toString());
    w.send("Message received: " + data.toString());
  })

  w.on('close', ()=>{
    console.log('A user disconnected');
  })
})