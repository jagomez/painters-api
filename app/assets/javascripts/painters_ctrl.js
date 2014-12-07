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

		$scope.addPainter = function(first_name, last_name, country, yearsactive) {
		var newPainter = { first_name: first_name, last_name: last_name, country: country, yearsactive: yearsactive};
		$http.post('/v1/painters.json', {painter: newPainter}).then(function(response) {
		}, function (error) {
		$scope.error = error.statusText;
		});
			$scope.painters.push(newPainter);
			$scope.newPainterFirst_Name = "";
			$scope.newPainterLast_Name = "";
			$scope.newPainterCountry = "";
		}; 
		window.scope = $scope;

	});
}());