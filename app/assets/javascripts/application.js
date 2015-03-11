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

		var url_geo = "https://outdoor-data-api.herokuapp.com/api.json?api_key=e2f3a93a9713c78f65bd813104501e8b&q[radius]=25&[lat]=" + crd.latitude + "&[lon]=" + crd.longitude;

		$('#trails-map').attr("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyAjoKTY16EkIxIqgVcBpo5kpXgDsz0sJGk&center=" + crd.latitude + "," + crd.longitude + "&zoom=12&maptype=satellite");

$.ajax({
	url: url_geo,
	dataType: 'jsonp',	
	success: function(parsed_json) {
		for (var i=0; i<parsed_json.places.length; i++){
		
		var name = parsed_json.places[i].name
		var city = parsed_json.places[i].city
		var state = parsed_json.places[i].state
		var trail_id = parsed_json.places[i].unique_id
		var lat = parsed_json.places[i].lat
		var lon = parsed_json.places[i].lon

		if (parsed_json.places[i].activities) { 
			for (var j=0; j<parsed_json.places[i].activities.length; j++){
				var activityType = parsed_json.places[i].activities[j].activity_type_name
				var activityDesc = parsed_json.places[i].activities[j].description
				var pic = parsed_json.places[i].activities[j].thumbnail
				var rating = parsed_json.places[i].activities[j].rating
				var length = parsed_json.places[i].activities[j].length
				}
			}
		
		var trailData = {
			trail_id : trail_id,
			name : name,
			city : city,
			state : state,
			lat : lat,
			lon : lon,
			type1 : activityType,
			type2 : null,
			length : length,
			description : activityDesc,
			pic : pic,
			rating : rating
		};
		$.ajax({
			url: '/trails',
			data: {trail: trailData},
			dataType: 'json',
			type: 'POST',
			success: function(result){
				$("#trails-list").append("<li class='trail-name'><a href='/trails/" + result.trail_id + "'>" + result.name + "</a></li><li class='trail-city'>" + result.city + "</li>, <li class='trail-state'>" + result.state + "</li><li class='trail-type'></li>")
			}	
		});
}
}
});
}
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
					for (i=0; i<parsed_json.places.length; i++){
						var name = parsed_json.places[i].name
						var city = parsed_json.places[i].city
						var state = parsed_json.places[i].state
						var trail_id = parsed_json.places[i].unique_id
						var lat = parsed_json.places[i].lat
						var lon = parsed_json.places[i].lon

						if (parsed_json.places[i].activities) { 
							for (var j=0; j<parsed_json.places[i].activities.length; j++){
								var activityType = parsed_json.places[i].activities[j].activity_type_name
								var activityDesc = parsed_json.places[i].activities[j].description
								var pic = parsed_json.places[i].activities[j].thumbnail
								var rating = parsed_json.places[i].activities[j].rating
								var length = parsed_json.places[i].activities[j].length
							}
						}

						var trailData = {
							trail_id : trail_id,
							name : name,
							city : city,
							state : state,
							lat : lat,
							lon : lon,
							type1 : activityType,
							type2 : null,
							length : length,
							description : activityDesc,
							pic : pic,
							rating : rating
						};
						$.ajax({
							url: '/trails',
							data: {trail: trailData},
							dataType: 'json',
							type: 'POST',
							success: function(result){
								$("#trails-list").prepend("<li class='trail-name'><a href='/trails/" + result.trail.id + "'>" + result.trail.name + "</a></li><li class='trail-city'>" + result.trail.city + "</li>, <li class='trail-state'>" + result.trail.state + "</li><li class='trail-type'>" + result.trail.type1 + "</li>")
							}
						})
					}
				} 
				})			
			});

var offset1 = $('#trails-map').offset();
$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	if (offset1.top<scrollTop) {
		$('#trails-map').addClass('fixed');
		$('#trails').addClass('scroll');
	} else {
		$('#trails-map').removeClass('fixed');
		$('#trails').removeClass('scroll');
	}
});

});


