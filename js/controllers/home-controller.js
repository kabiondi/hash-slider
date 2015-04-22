(function() {
	
	app.controller('homeCtrl', ['$scope', 'hashFactory', function ($scope, hashFactory) {
		var tag = hashFactory.setHashtag();
		var hamToggle = document.getElementsByClassName("hamburger")[0];
		var menuToggle = document.getElementById("ham-menu");


		$scope.submitTag = function () {
			tag = $scope.inputHashtag;
			hashFactory.setHashtag(tag);
		}

		function toggleHandler(toggle) {
			toggle.addEventListener( "click", function(e) {
				e.preventDefault();
				if (this.classList.contains("active") === true) {
					this.classList.remove("active");
					menuToggle.classList.remove("active");
				}
				else {
					this.classList.add("active");
					menuToggle.classList.add("active");
				}
			});
		}
		toggleHandler(hamToggle);

	}]);

})();