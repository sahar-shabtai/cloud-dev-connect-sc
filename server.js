var port = process.env.PORT || 8080;
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())

var obj =   [{"id":11, "title":"hello", "body":"world"}]


app.get('/', function(req, res) {
  res.send(
    JSON.stringify(obj)
  );
});

app.post('/', function(req, res) {
  res.send({
    "Output" : "Hello World!"
  });
});

app.listen(port);
module.exports = app;
