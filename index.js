// 2mHnmLI
const express = require("express");
const http = require("http");
var WebSocket = require("ws");

var app = express();

app.use(express.static(__dirname + "/public"));

app.use((req, res)=>{ 
  res.send("404: File not found", 404);
});

app.use((err, req, res, nxt)=>{
  res.send("500: Interal Server Error", 500);
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection',(ws)=>{ 
  ws.on('message',(msg)=>{
    console.log("Received: "+msg);
  });
 
  ws.send("something");
});
 
server.listen(process.env.PORT,()=>{
  console.log("Running!");
});
