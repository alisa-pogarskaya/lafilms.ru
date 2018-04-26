// -- Topmenu-mobile -- //

$('.nav-toggle').on('click', function(){
		$('#topmenu').toggleClass('active');
		});

// -- Topmenu -- //
		
$(document).ready(function () {
			  $('.sub > a').click(function(){
			    $('.sub ul').slideUp();
			     if ($(this).next().is(":visible")){
			         $(this).next().slideUp();
			     } else {
			     $(this).next().slideToggle();
			     }
			    return false;
			  });
			     $('.topmenu > ul > li > a').click(function(){
				 $('.topmenu > ul > li > a, .sub a').removeClass('active');
				 $(this).addClass('active');
				}),
			     $('.sub ul li a').click(function(){
				 $('.sub ul li a').removeClass('active');
				 $(this).addClass('active');
				});
});


// -- Map-address -- //

function initMap() {
		  
	var map;

	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(59.965051, 30.312705),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{"featureType": "landscape","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "poi","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "water","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "road","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"stylers": [{"hue": "#00aaff"},{"saturation": -100},{"gamma": 2.15},{"lightness": 12}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"visibility": "on"},{"lightness": 24}]},{"featureType": "road","elementType": "geometry","stylers": [{"lightness": 57}]}]
	}
	
	map = new google.maps.Map(document.getElementById("map-contacts"),myOptions);

	// Marker - style
	  
	var markerContacts = new google.maps.Marker({
		position: {lat: 59.965051, lng: 30.312705},
		map: map,
		title: 'Пункт',
		icon: 'img/pin-map-office.svg'
	});
	
}