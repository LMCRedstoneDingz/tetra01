var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/port",function(req, res) {
  res.send(process.env.PORT);
});

app.use(function(req, res) {
  res.status(404);
  res.sendFile(__dirname + "/err/404.html");
});

app.use(function(err, req, res, nxt) {
  res.status(500);
  res.sendFile(__dirname + "/err/500.html");
});

app.listen(process.env.PORT,()=>{
  console.log("Running!");
});
