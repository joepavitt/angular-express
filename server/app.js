var express = require('express');
var app = express();

// require
require('./routes')(app);

app.use(express.static('client'));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

exports = module.exports = app;
