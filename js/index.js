var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl:"subIndex/trangchu.html",
		controller:'CtrTrangchu'
	})
	.when('/quanly',{
		templateUrl:'subIndex/quanly.html',
		controller:'CtrQuanLy'
	})
});
app.controller('CtrQuanLy', function($scope, $http){
	$http.get('listStudent/db.json').then(function(res){
		$scope.listStudent= res.data;
	})

})