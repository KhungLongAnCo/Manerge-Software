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
	.when('/ChiTiet', {
		templateUrl:'subIndex/chiTietStudent.html',
		controller:'CtrChiTiet'
	})
});
app.controller('CtrQuanLy', function($scope, $http){
	$http.get('listStudent/db.json').then(function(res){
		$scope.listStudent= res.data;
		$scope.chiTiet = function(student){
			sessionStorage.setItem('chiTiet', angular.toJson(student));
		}
	})

})
app.controller('CtrChiTiet', function($scope){
	var chiTietSd = sessionStorage.getItem('chiTiet');

	if(chiTietSd){
		$scope.clickStudent = true;
		$scope.chiTiet = angular.fromJson(chiTietSd);
	}
	else{
		$scope.clickStudent = false;
	}
})