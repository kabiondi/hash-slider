(function() {
	
	app.controller('homeCtrl', ['$scope', 'hashFactory', function ($scope, hashFactory) {
		var tag = hashFactory.setHashtag();

		$scope.submitTag = function () {
			tag = $scope.inputHashtag;
			hashFactory.setHashtag(tag);
		}

	}]);

})();