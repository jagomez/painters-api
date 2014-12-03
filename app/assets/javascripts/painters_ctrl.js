(function(){
	"use strict";
	angular.module("app").controller("paintersCtrl", function($scope, $http){
		
		$http.get("/v1/painters.json").then(function (response) {
			$scope.painters = response.data;
		});

	});
}());