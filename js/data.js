var Ales = [
	'Hradec Králové',
	'Jaroměř',
	'Dvůr Králové nad Labem',
	'Trutnov',
	'Praha',
	'Plzeň',
	'České Budějovice',
	'Liberec',
	'Brno',
	'Nový Bydžov',
	'Barchov',
	'Světí',
	'Pardubice',
	'Roztoky',
	'Karlštejn',
	'Jeseník',
	'Úvaly',
	'Náchod',
	'Broumov',
	'Hronov',
	'Adršpach',
	'Nechanice',
	'Mokrovousy',
	'Bříza',
	'Všestary',
	'Předměřice nad Labem',
	'Lochenice',
	'Velký Vřešťov',
	'Starý Rokytník',
	'Nový Rokytník',
	'Hrádek nad Nisou',
	'Jablonec nad Nisou',
	'Špindlerův Mlýn',
	'Pec pod Sněžkou',
	'Velká Úpa',
	'Cheb',
	'Syrovátka',
	'Urbanice',
	'Praskačka',
	'Káranice',
	'Bílý Potok',
	'Harrachov',
	'Beroun',
	'Srbsko',
	'Skokovy',
	'Miletín',
	'Hořice',
	'Litomyšl',
	'Svitavy',
	'Česká Třebová',
	'Vamberk',
	'Ústí nad Orlicí',
	'Kostelec nad Orlicí',
	'Rychnov nad Kněžnou',
	'Lukavice',
	'Velké Hamry',
	'Jilemnice',
	'Čáslav',
	'Nová Paka',
	'Jičín',
	'Mladá Boleslav',
	'Teplice nad Bečvou',
	'Lázně Bohdaneč',
	'Přelouč',
	'Staré Hradiště',
	'Doudleby nad Orlicí',
	'Jetřichov',
	'Doksy',
	'Hrubá Skála',
	'Sobotka',
	'Bakov nad Jizerou',
	'Havlíčkův Brod',
	'Olomouc',
	'Vysoké Mýto',
	'Tišnov',
	'Chrudim',
	'Opočno',
	'Dobruška',
	'Smiřice',
	'Týniště nad Orlicí',
	'Černilov',
	'Třebechovice pod Orebem',
	'Podůlšany',
	'Pohřebačka',
	'Vysoká nad Labem',
	'Česká Skalice',
	'Vysokov',
	'Jizerka',
	'Radvánovice',
	'Častolovice'
];
Filip = [
	'Česká Lípa',
	'Nový Bydžov',
	'Brno',
	'Líbeznice',
	'Kounice',
	'Kutná Hora',
	'Ústí nad Labem',
	'Děčín',
	'Prčice',
	'Špindlerův Mlýn',
	'Jaroměř',
	'Plzeň',
	'Liberec',
	'Karlovy Vary',
	'Praha',
	'Hradec Králové',
	'Pardubice',
	'Třeboň',
	'Ostrava',
	'Hejnice',
	'Mladá Boleslav',
	'Milovice',
	'Lipno',
	'Rožmberk nad Vltavou',
	'Jáchymov',
	'Boží Dar',
	'Ratibořice',
	'Náchod',
	'Svitavy',
	'Český Krumlov'
];
Ales.forEach(AlesFunc);
Filip.forEach(FilipFunc);

function AlesFunc(item, index) {
	var realIndex = index + 1;
	console.log('Renderování <li> elementu pro ' + item + ', které je v seznamu ' + realIndex + '. (Aleš list)');
	var map =
		'<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=' +
		encodeURIComponent(item) +
		'&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>';
	var link = " <li><a id='location' onClick='openMap(\"" + item + '")\'>' + item + '</a></li>';

	document.getElementById('ales').innerHTML += link + '<br />';
}
function FilipFunc(item, index) {
	var realIndex = index + 1;
	console.log('Renderování <li> elementu pro ' + item + ', které je v seznamu ' + realIndex + '. (Filip list)');
	var map =
		'<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=' +
		encodeURIComponent(item) +
		'&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>';
	var link = " <li><a id='location' onClick='openMap(\"" + item + '")\'>' + item + '</a></li>';

	document.getElementById('filip').innerHTML += link + '<br />';
}
/*
$.get(
	'http://www.mapquestapi.com/geocoding/v1/address?',
	{
		location: 'Hradec Králové',
		key: 'n9zxGG50g7dR18Q5o0aC8cJXjdr8a4Lp'
	},
	function(data) {
		console.log(data['results'][0]['locations'][0]['latLng']);

	}
);
*/
function openMap(e) {
	$('#map').html(
		'<iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=' +
			encodeURIComponent(e) +
			'&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'
	);
	console.log('Vyzobrazování místa ' + e);
	$([ document.documentElement, document.body ]).animate(
		{
			scrollTop: $('#map').offset().top
		},
		1500
	);
}
$('a').click(function() {});
$(window).scroll(function() {
	if ($(this).scrollTop()) {
		$('#toTop').fadeIn();
	} else {
		$('#toTop').fadeOut();
	}
});

$('#toTop').click(function() {
	$('html, body').animate({ scrollTop: 0 }, 1000);
});
/*
<div class="tooltip">Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div> 
*/
var gmap = document.getElementById('ales').children[0];
gmap.innerHTML +=
	' <div class="tooltip"><i class="material-icons">info</i> <span class="tooltiptext">Klikněte pro zobrazení na mapě</span> </div> ';
