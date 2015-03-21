(function() {

	app.controller('slideshowCtrl', ['$scope', 'hashFactory', function ($scope, hashFactory) {
		var hashtag;
		// $scope.hashtag = hashFactory.getHashtag();

		$scope.submitTagFromSlideshow = function () {
			hashtag = $rootScope.rootScopeTest;
			console.log(hashtag);
			console.log('slideshow controller');
			$('.slideshow-target').html(hashtag);
		}	

		console.log($rootScope.rootScopeTest);

		// $scope.slideshow = function () {
		// 	var access_token = '226650805.67f1f00.17a2adc593574b5bb50481090e14526e';// Enables the access token to be stored elsewhere
		// 	var access_parameters = {access_token:access_token};// Stores the access token in JSON format
		// 	var instagramUrl = 'https://api.instagram.com/v1/tags/' + 'pnw' + '/media/recent?callback=?&count='+ 10;
		// 	$.getJSON(instagramUrl, access_parameters, makeArray);
		// }


	}]);

})();