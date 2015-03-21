(function() {

	app.controller('slideCtrl', ['$scope', 'hashFactory', function ($scope, hashFactory) {
		
		var hashtag = hashFactory.setHashtag();
		$('.slideshow-target').html(hashtag);

	}]);

})();