var myOptions = {
  	zoom: 9,
	mapTypeControl: true,
  	mapTypeId: google.maps.MapTypeId.ROADMAP
};

function init(map,latlng,title){
$(function() {

	map.setCenter(latlng);
	var marker = new google.maps.Marker({
		    position: latlng,
		    map: map,
		    title: title
		  	});
	marker.setIcon('assets/img/etec.png');
});
}

// Constantina
var mapConstantina = new google.maps.Map(document.getElementById("mapa-constantina"), myOptions);
var latlngConstantina = new google.maps.LatLng(-27.732161,-52.994324);
var titleConstantina = 'Polo e-Tec Constantina';

$('#constantina').on('shown', function (e) { google.maps.event.trigger(mapConstantina, "resize");
init(mapConstantina,latlngConstantina,titleConstantina);
});

//Palmeira das Missões
var mapPalmeira = new google.maps.Map(document.getElementById("mapa-palmeira"), myOptions);
var latlngPalmeira = new google.maps.LatLng(-27.897349,-53.314011);
var titlePalmeira = 'Polo e-Tec Palmeira das Missões';

$('#palmeira').on('shown', function (e) { google.maps.event.trigger(mapPalmeira, "resize");
init(mapPalmeira,latlngPalmeira,titlePalmeira);
});

//Planalto
var mapPlanalto = new google.maps.Map(document.getElementById("mapa-planalto"), myOptions);
var latlngPlanalto = new google.maps.LatLng(-27.331973,-53.059357);
var titlePlanalto = 'Polo e-Tec Planalto';

$('#planalto').on('shown', function (e) { google.maps.event.trigger(mapPlanalto, "resize");
init(mapPlanalto,latlngPlanalto,titlePlanalto);
});

//Ronda Alta
var mapRonda = new google.maps.Map(document.getElementById("mapa-ronda"), myOptions);
var latlngRonda = new google.maps.LatLng(-27.783202,-52.806526);
var titleRonda = 'Polo e-Tec Ronda Alta';

$('#ronda').on('shown', function (e) { google.maps.event.trigger(mapRonda, "resize");
init(mapRonda,latlngRonda,titleRonda);
});

//Sagrada Família
var mapSagrada = new google.maps.Map(document.getElementById("mapa-sagrada"), myOptions);
var latlngSagrada = new google.maps.LatLng(-27.734573,-53.167416);
var titleSagrada = 'Polo e-Tec Sagrada Família';

$('#sagrada').on('shown', function (e) { google.maps.event.trigger(mapSagrada, "resize");
init(mapSagrada,latlngSagrada,titleSagrada);
});

//Trindade do Sul
var mapTrindade = new google.maps.Map(document.getElementById("mapa-trindade"), myOptions);
var latlngTrindade = new google.maps.LatLng(-27.522202,-52.901329);
var titleTrindade = 'Polo e-Tec Trindade do Sul';

$('#trindade').on('shown', function (e) { google.maps.event.trigger(mapTrindade, "resize");
init(mapTrindade,latlngTrindade,titleTrindade);
});