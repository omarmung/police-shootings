var $ = require('jQuery');
var express = require('express');

var app = express();


// var getKillingsFromAPI = function(){};
app.use(express.static('client'));
app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular/'));

app.get('/test', function(request, response){
	console.log('test');

  response.end('got it');
});

app.listen(3000, function() {
	console.log('Server is running!');
});