(function() {

	app.factory('hashFactory', function() {
		var hashFromFactory = localStorage.getItem('currentHashtag');
		var hashService = {};

		localStorage.setItem('currentHashtag',''); //initialize the local storage

		var storeTag = function (tag) {
			localStorage.setItem('currentHashtag',tag);
		}

		hashService.setHashtag = function(tag) {
			if (tag) {
				storeTag(tag);
				return hashFromFactory;	
			}
			else {
				return hashFromFactory;
			}
		}

		return hashService;
	});

})();