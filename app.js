var express = require('express');
var path = require('path');

var app = express();

var env = process.env.NODE_ENV || 'develop';

if (env == 'develop'){
    app.set('view engine', 'jade');
    app.set('views', 'templates');
};

// Node_module file routes
//---------------------------
app.get('/node_modules/d3/d3.js', function(req, res){
    res.sendFile(path.join(__dirname, 'node_modules', 'd3', 'd3.min.js'));
});


// Client-side routes
//---------------------------
app.get('/', function(req, res){
    res.render('base.jade');
});

var server = app.listen(8080, function(){
  var host = server.address().address,
      port = server.address().port;

  console.log("This ya boy EXPRESS.JS and I'm listenin' at http://%s%s", host, port);
});
