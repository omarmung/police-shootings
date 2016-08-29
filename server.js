var $ = require('jQuery');
var express = require('express');

var app = express();


// var getKillingsFromAPI = function(){};
app.use(express.static('client'));
app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', function(request, response){
	
	console.log('About to GET');
  $.get("https://thecountedapi.com/api/counted/?state=CA", function(){
  })
  .done(function(data) {
    response.end(JSON.stringify(data));
  })
  .fail(function(err) {
  	console.error(err);
  });

});

app.listen(3000, function() {
	console.log('Server is running!');
});