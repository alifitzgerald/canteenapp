angular.module('app')
  .controller('OrderCtrl', function ($scope, $http, $routeParams, $location) {
    $scope.name = "OrderCtrl"

    $scope.params = $routeParams;


  	$scope.submitEmail = function () {
      
  	  var formData = $scope.email;



      $http.post('/email', formData)
        .success(function (data, status) {
          console.log("Sent ok client " + status);
        })
        .error(function (data, status) {
          console.log("Error client " + status);
          console.log(data);
        })

    	$scope.email = {};
  		$location.path('/')
       

    }
  
        


    });