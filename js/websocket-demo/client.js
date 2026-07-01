const wss =  require('ws');
const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
})

const w = new wss('ws://localhost:8080');

w.on('open', ()=>{
  console.log('Connected to the WebSocket server');

  promptForMessage();
})

w.on('message', (data)=>{
  console.log('Received from server:', data.toString());
})

w.on('error', (err)=>{
  console.log('Error:', err);
})

w.on('close', ()=>{
  console.log('Disconnected from the WebSocket server');
  process.exit(0);
})

function promptForMessage(){
  rl.question("Enter a message to exit: ", (message)=>{
    if(message.toLowerCase()==="exit"){
      rl.close();
      w.close();
    }
    w.send(message);
    promptForMessage();
  })
}

