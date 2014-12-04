(function(){
	"use strict";
	angular.module("app").controller("paintersCtrl", function($scope, $http){
		
		$http.get("/v1/painters.json").then(function (response) {
			$scope.painters = response.data;
		});
		$scope.changeOrder = function(attribute) {
		$scope.orderAttribute = attribute;
		$scope.sortDirection = !$scope.sortDirection;
		};
		window.scope = $scope;

	});
}());