// var $ = require('jQuery');
var request = require('request');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.use(bodyParser.json());
app.use(express.static('client'));
app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular/'));

app.get('/test', function(request, response){
	console.log('test');
  response.end('got it');
});

app.post('/killing', function(request, response){
	var size = request.body.size;
	console.log('Angular POST is working! Payload: ');
	console.log(request.body);
  response.end('POST request');
});

// google maps api key: AIzaSyDtAwRwifXkKwqNvmsBPceVEIfZqkG9jmE
// https://developers.google.com/maps/documentation/streetview/intro

  	// var data = {
  	// 		size: "1600x800",
  	// 	  location: "some text", // this.address + ' ' + this.city + ' ' + this.state,
  	// 	  fov: 90,
  	// 	  heading: 235,
  	// 	  pitch: -30,
  	// 	  key: "AIzaSyDtAwRwifXkKwqNvmsBPceVEIfZqkG9jmE"
  	// 	};


// var myJSONObject = {
// 		size: "1600x800",
// 	  location: "3400 W Grenshaw St Chicago, IL",
// 	  fov: 90,
// 	  heading: 235,
// 	  pitch: -30,
// 	  key: "AIzaSyDtAwRwifXkKwqNvmsBPceVEIfZqkG9jmE"
// 	};
// request({
//     url: "https://maps.googleapis.com/maps/api/streetview",
//     method: "GET",
//     json: true,
//     body: myJSONObject
// }, function (error, response, body){
//     console.log(response);
// });


app.listen(3000, function() {
	console.log('Server is running!');
});