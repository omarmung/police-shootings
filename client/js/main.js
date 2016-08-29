var app = angular.module('myApp', [])
.controller('myController', // [$scope, $http], 
	function($scope, $http) {
  $scope.myModel = null;

  $http.get("https://thecountedapi.com/api/counted/?state=IL")
      .then(function(response) {
          $scope.myModel = response.data;
      });

});



	// $http.get(
	// 	'https://thecountedapi.com/api/counted/?state=CA', 
	// 	config
	// 	)
	// .then(
	// 	successCallback, 
	// 	errorCallback
	// );

// $http.get(
// 	'https://thecountedapi.com/api/counted/?state=CA', 
//   config
// )
// .then(function(response) {
//   console.log(response);
//   $scope.myModel = response;
// }, 
// function(response) {
//   console.log(response);
// });

// .directive('myFirstDirective', function() {
// 	return {

// 	};
// });


	 // console.log('About to GET');
	 //  $.get("https://thecountedapi.com/api/counted/?state=CA", function(){
	 //  })
	 //  .done(function(data) {
	 //    console.error(data); 
   //     console.log('length of killings data array: ', data.length);
   //     formatKillings(data);
	 //  })
	 //  .fail(function(err) {
	 //  	console.error(err);
	 //  });

	 //  // var formatKillings = function(data) {
	 //  // 	data.forEach(function(killing, index) {
	 //  // 		// $('#killings').prepend('<p></p>').text(killing.name);
	 //  // 		// console.log(killing.name);
	 //  // 	});
	  	
	 //  };