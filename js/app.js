var App = angular.module('App',[]);

App.controller('TodoCtrl',function($scope, $http){
	$http.get('menus.json').then(function(res){
		$scope.menus = res.data;
	});
});