var express = require("express");
var app = express();
var http = require("http").Server(app);
var WebSocket = require("ws");

app.use(express.static(__dirname + "/public"));

app.use(function(req, res) { 
  res.send("404: File not found", 404);
});

app.use(function(err, req, res, nxt) {
  res.send("500: Interal Server Error", 500);
});
 
http.listen(process.env.PORT,()=>{
  console.log("Running!");
});

const wss = new WebSocket.Server(http);

wss.on('connection', (ws) => {
  ws.send("Hi");
});

/*setInterval(()=>{
  wss.clients.forEach((client)=>{
    client.send(new Date().toTimeString());
  });
}, 1000);*/
