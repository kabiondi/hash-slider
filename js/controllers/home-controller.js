(function() {
	
	app.controller('homeCtrl', ['$scope', 'hashFactory', function ($scope, hashFactory) {
		var userHashtag;
		var test;

		$scope.submitTag = function () {
			userHashtag = $scope.inputHashtag;
			test = hashFactory.setHashtag(userHashtag);
			console.log(test);
		}

	}]);

})();