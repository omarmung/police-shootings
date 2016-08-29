var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.end('Hello, world!');
});

app.listen(3000, function() {
	console.log('Server is running!');
});