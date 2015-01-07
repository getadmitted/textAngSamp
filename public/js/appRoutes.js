// public/js/appRoutes.js
	angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})

		// sign up page
		.when('/form', {
			templateUrl: 'views/form.html',
			controller: 'mainController'
		})

	$locationProvider.html5Mode(true);

}]);
