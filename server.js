var $ = require('jQuery');
var express = require('express');

var app = express();


// var getKillingsFromAPI = function(){};
app.use(express.static('client'));
app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', function(request, response){
	


});

app.listen(3000, function() {
	console.log('Server is running!');
});