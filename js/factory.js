(function() {

	app.factory('hashFactory', function() {
		var hashFromFactory = localStorage.getItem('currentHashtag');
		var hashService = {};

		localStorage.setItem('currentHashtag',''); //initialize the local storage

		hashService.setHashtag = function(tag) {
			if (tag) {
				localStorage.setItem('currentHashtag',tag);
				return hashFromFactory;	
			}
			else {
				return hashFromFactory;
			}
		}

		return hashService;
	});

})();