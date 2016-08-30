var request = require('request');
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var mongoDB = require('mongod');

var app = express();

app.use(bodyParser.json());
app.use(express.static('client'));
app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular/'));

// setting up Maps API
app.get('/map', function(req, res) {

	var myJSONObject = {
			size: "1600x800",
		  location: "660 16th Ave. San Francisco, CA",
		  fov: 90,
		  heading: 235,
		  pitch: -30,
		  key: "AIzaSyDtAwRwifXkKwqNvmsBPceVEIfZqkG9jmE"
		};

	request(
	  {
	    url: "https://maps.googleapis.com/maps/api/streetview",
	    method: "GET",
	    json: true,
	    dataType: 'image/jpeg',
	    body: myJSONObject
	  }, 
	  function (error, response, body){
	    console.log(response);
	  }).pipe(response);
  // request('http://images1.wikia.nocookie.net/__cb20120715102950/disney/images/a/a5/Disneygoofy2012.jpeg').pipe(res);
});

// POST a killing to the DB
app.post('/killing', function(request, response){
	var _id = request.body._id;
	var name = request.body.name;
	var age = request.body.age;
	var sex = request.body.sex;
	var race = request.body.race;
	var month = request.body.month;
	var day = request.body.day;
	var year = request.body.year;
	var address = request.body.address;
	var city = request.body.city;
	var state = request.body.state;
	var cause = request.body.cause;
	var dept = request.body.dept;
	var armed = request.body.armed;
	var __v = request.body.__v;
  
  var location = address + ' ' + city + ', ' + state
  console.log(location);
  // getMapsImage(location);
  response.end();
});

	
	// request(
	//   {
	// 		url: "http://www.omdbapi.com/?t=Batman&y=&plot=full&r=json",
	// 		method: "GET"
	//   }, 
	//   function(error, response, body) {
  //      console.log(response);
	//   } 
	// );
// };




app.listen(3000, function() {
	console.log('Server is running!');
});
// app.get('/test', function(request, response){
// 	console.log('test');
//   response.end('got it');
// });
	// console.log('POST Payload to Server: ');
	// console.log(request.body);

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
// var $ = require('jQuery');