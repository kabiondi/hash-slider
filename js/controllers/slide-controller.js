(function() {

	app.controller('slideCtrl', ['$scope', 'hashFactory', function ($scope, hashFactory) {
		var count = 10;
		var count = 10;
		var slideTime = 5000;
		var slideshowStarted = false;
		var slideInterval = '';
		var tag = hashFactory.setHashtag();

		$('.slideshow-target').html(tag);

		function getPics (tag) {
			console.log('getPics runs');
			// Concatenates Instagram url to use as API endpoint and gets JSON-encoded data from Instagram server
			var access_token = getToken();// Enables the access token to be stored elsewhere
			var access_parameters = {access_token:access_token};// Stores the access token in JSON format
			var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count='+ count;
			$.getJSON(instagramUrl, access_parameters, makeArray);
		}

		function makeArray (instagram_data) {
		  console.log('makeArray runs');
		  if (instagram_data.meta.code == 200) {
		    var photos = instagram_data.data;// Instagram array of picture data
		    if (photos.length > 0) {
		      var i = 0; //this should probably be declared in the for loop
		      var picArray = [];
		      for (i=0;i<photos.length;i++) {
		        picArray.push('<img src=' + photos[i].images.standard_resolution.url + '>');
		      }
		      appendPics(picArray);
		    }
		    else {
		      $('#error-target').append("No photos were found");
		    }
		  }
		  else {
		    var error = instagram_data.meta.error_message;
		    $('#error-target').append('Request Error:' + error);
		  }
		}

		function appendPics (array) {
		  console.log('appendPics runs')
		  for (i = 0; i < array.length; i++) {
		    $('.cycle-slideshow').cycle('add', array[i]);
		  }
		  if (slideshowStarted==false) {// pause and set timer upon initialization
		    $('.cycle-slideshow').cycle('pause');
		    slideInterval = setInterval(timer, slideTime);
		    slideInterval;
		    slideshowStarted=true;
		  }
		}

		function timer () {
		  console.log('timer runs');
		  var slidesRemaining = $(".cycle-slideshow").data("cycle.opts").slideCount;
		  console.log('slidesRemaining = '+slidesRemaining);
		  if (slidesRemaining>0) {// Animate slides and remove after use
		    $('.cycle-slideshow').cycle('next');
		    $('.cycle-slideshow').cycle('remove', 0);
		    console.log(slideTime);
		  }
		  if (slidesRemaining==2) {// Get more pics when only two are left
		    getPics(tag);
		  }
		  if (slidesRemaining==0) {// If there aren't enough pics for a slideshow then stop
		    clearInterval(slideInterval);
		    console.log('Slideshow stopped: slidesRemaining = 0');
		  }
		}

		function getToken () {
		  console.log('getToken runs');
		    return '226650805.67f1f00.17a2adc593574b5bb50481090e14526e';
		 }


		$( document ).ready(getPics(tag));
	}]);

})();