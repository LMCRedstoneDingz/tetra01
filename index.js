var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(function(req, res) {
   res.send('404: Page not Found', 404);
});
  
app.use(function(error, req, res, next) {
   res.send('500: Internal Server Error', 500);
});
app.listen(process.env.PORT,()=>{
  console.log("Running!");
});
