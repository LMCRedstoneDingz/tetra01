const WebSocket = require('ws');
const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.use(function(req, res) { 
  res.send("404: File not found", 404);
});

app.use(function(err, req, res, nxt) {
  res.send("500: Interal Server Error", 500);
});
 
app.listen(process.env.PORT,()=>{
  console.log('Running!");
});

const wss = new WebSocket.Server({app});

setInterval(()=>{
  wss.clients.forEach((client)=>{
    client.send(new Date().toTimeString());
  });
}, 1000);
