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
	$("#trail_search").on('submit', function(event){
		event.preventDefault();

		var city = $('#city').val();
		var url = "https://outdoor-data-api.herokuapp.com/api.json?api_key=e2f3a93a9713c78f65bd813104501e8b&q[city_cont]=" + city;
		$('#city').val('');

		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(parsed_json) {
				$.ajax({
					type: "POST",
					url: "/trails/new",
					data: parsed_json,
					contentType: "application/json",
					dataType: "json"
				})
				// var trails = [];
			// 	for (i=0; i<5; i++){
			// 		trails.push(parsed_json.places[i]);
			// 	}
			// 	console.log(trails[0].name)
			// 	console.log(trails[0].activities[0].activity_type_name)
			// }
			}
	});
});

	



});












