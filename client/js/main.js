var app = angular.module('myApp', [])
.controller('myController', // [$scope, $http], 
	function($scope, $http, serverRequests) {
	  $scope.killings = null;

	  $scope.test = function(killing) {
	    // serverRequests.testService(killing);	
		  serverRequests.postKilling(killing);
	  };
	  
	  // get police killings by state
	  $http.get("https://thecountedapi.com/api/counted/?state=IL")
		  .then(function(response) {
		      $scope.killings = response.data;
		  });

});

app.factory('serverRequests', function($http) {
  var service = {};
  
  service.postKilling = function(killing) {
  	var killingData = killing;

		$http.post('/killing', killingData)
		.then(
			function(data) {
				console.log('post returned!!');
     	  console.log(data);
      }, 
      function(error) {
        console.error(error);
		  }
		);
  };

  service.testService = function(killing) {
  	console.log('service works!!' + killing.city);
  };

  return service;
});
