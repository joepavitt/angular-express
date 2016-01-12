'use strict';

var express = require('express');
var path = require('path');
var app = express();

// require
require('./routes')(app);

// static - all our js, css, images, etc go into the assets path
app.use('/app', express.static(path.join(__dirname, '../client', 'app')));
app.use('/bower_components', express.static(path.join(__dirname, '../client', 'bower_components')));
app.use('/style', express.static(path.join(__dirname, '../client', 'style')));
app.use('/assets', express.static(path.join(__dirname, '../client', 'assets')));

// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

exports = module.exports = app;
