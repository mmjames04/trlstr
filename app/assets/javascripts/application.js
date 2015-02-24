// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


jQuery(document).ready(function($){
	
	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};
	
	function success(pos) {
		crd = pos.coords;

		console.log('Your current position is:');
		console.log('Latitude: ' + crd.latitude);
		console.log('Longitude: ' + crd.longitude);
		console.log('More or less ' + crd.accuracy + ' meters.')

		var url_geo = "https://outdoor-data-api.herokuapp.com/api.json?api_key=e2f3a93a9713c78f65bd813104501e8b&q[radius]=25&[lat]=" + crd.latitude + "&[lon]=" + crd.longitude;
	$.ajax({
		url: url_geo,
		dataType: 'jsonp',
		success: function(parsed_json) {
					var trails = [];
					var trailsActivities = []
					for (i=0; i<10; i++){
						trails.push(parsed_json.places[i]);
						$("#trail-list").append(
							"<li class='trail-name'>" + trails[i].name + "</li><li class='trail-city'>" + trails[i].city + "</li><li class='trail-state'>" + trails[i].state + "</li><li class='trail-directions'>" + trails[i].directions + "</li><li class='trail-lat'>" + trails[i].lat + "</li><li class='trail-lon'>" + trails[i].lon + "</li><li class='trail-type'>" + trails[i].activities[0].activity_type.name + "</li>");
					}
				} 
	})

	};
	function error(err) {
		console.warn('ERROR(' + err.code + '): ' + err.message);
	};
	navigator.geolocation.getCurrentPosition(success, error, options);


	$("#trail_search").on('submit', function(event){
		event.preventDefault();

		var city = $('#city').val();
		var url = "https://outdoor-data-api.herokuapp.com/api.json?api_key=e2f3a93a9713c78f65bd813104501e8b&q[city_cont]=" + city;
		$('#city').val('');
		$.ajax({
					url: url,
					dataType: 'jsonp',
					success: function(parsed_json) {
					var trails = [];
					var trailsActivities = []
					for (i=0; i<5; i++){
						trails.push(parsed_json.places[i]);
						$("#trail-list").replaceWith(
							"<li class='trail-name'>" + trails[i].name + "</li><li class='trail-city'>" + trails[i].city + "</li><li class='trail-state'>" + trails[i].state + "</li><li class='trail-directions'>" + trails[i].directions + "</li><li class='trail-lat'>" + trails[i].lat + "</li><li class='trail-lon'>" + trails[i].lon + "</li><li class='trail-type'>" + trails[i].activities[0].activity_type.name + "</li><li class='trail-pic'><img src=" + trails[i].activities[0].activity_type.thumbnail + "></li>");
					}
				} 
				
			});			
	})
});
