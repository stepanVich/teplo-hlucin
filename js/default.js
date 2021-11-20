// IE 8 Semantic elements polyfill
document.createElement('article');
document.createElement('aside');
document.createElement('details');
document.createElement('figcaption');
document.createElement('figure');
document.createElement('footer');
document.createElement('header');
document.createElement('main');
document.createElement('mark');
document.createElement('nav');
document.createElement('section');
document.createElement('summary');
document.createElement('time');

// Ready function
$(document).ready(function() {
	$('.menu-icon').click( function() {
		$('body').toggleClass('nav-top-active');
	});
	$('.search-icon').click( function() {
		$('body').toggleClass('search-active');
	});
});

// Google Map
var map;
var latLng = {lat: 49.906492, lng: 18.192011};
function initMap() {
  map = new google.maps.Map(document.getElementById('google-map'), {
    center: latLng,
    zoom: 16,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
  	position: latLng,
  	map: map,
  	icon: 'assets/marker-google.png'
  });
  google.maps.event.addListener(marker, 'click', function() {
    window.location.href = "https://www.google.com/maps/place/%C4%8Ceskoslovensk%C3%A9+arm%C3%A1dy+1263%2F32,+748+01+Hlu%C4%8D%C3%ADn,+%C4%8Cesk%C3%A1+republika/@49.9064919,18.1920108,17z/data=!3m1!4b1!4m2!3m1!1s0x47115f60283ac9b5:0x6e74ed9022e8951f";
  });
  // moving map
  map.setCenter({lat:49.905888, lng:18.191702});
}
