var app = angular.
	module('hashSlider', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeCtrl'
			})
			.when('/slideshow', {
				templateUrl: 'views/slideshow.html',
				controller: 'slideCtrl'
			})
			
		$locationProvider.html5Mode(true);
});

