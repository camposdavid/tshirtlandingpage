new WOW().init();

// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});


function initialize() {
	var mapProp = {
		center: new google.maps.LatLng(37.788890, -122.398104),
		zoom: 12, 
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map-container"), mapProp)
}
google.maps.event.addDomListener(window, "load", initialize)


// SideNav init
$(".button-collapse").sideNav();

// Custom scrollbar init
var el = document.querySelector('.custom-scrollbar');
Ps.initialize(el);

