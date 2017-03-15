var express = require("express");
const http = require("http");
var WebSocket = require("ws");

var app = express();

app.use(express.static(__dirname + "/public"));

app.use((req, res)=>{ 
  res.status(404).send("404: File not found");
});

app.use((err, req, res, nxt)=>{
  res.status(500).send("500: Interal Server Error");
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection',(ws)=>{
  console.log("Connetion!");
  ws.on('message',(msg)=>{
    console.log("Received: "+msg);
    console.log("Repeating...");
    ws.send(msg);
  });
  ws.on('close',()=>{
    console.log("Disconnected!");
  });
});
 
server.listen(process.env.PORT,()=>{
  console.log("Running!");
});
