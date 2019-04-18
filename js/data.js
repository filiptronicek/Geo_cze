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
Ales.forEach(gMapsLink);

function gMapsLink(item, index) {
	console.log('Hell');
	var map =
		'<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=' +
		encodeURIComponent(item) +
		'&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>';
	var link =
		" <li><a class='btn tooltipped' data-position='left' data-tooltip='Lool' id='location' onClick='openMap(\"" +
		item +
		"\")' hrfef='http://maps.google.com/maps?q=" +
		encodeURIComponent(item) +
		"' target='_blank'>" +
		item +
		'</a> </li>';

	document.getElementById('ales').innerHTML += link + '<br />';
}

function openMap(e) {
	$('#map').html(
		'<iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=' +
			encodeURIComponent(e) +
			'&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'
	);
}
$('a').click(function() {
	$([ document.documentElement, document.body ]).animate(
		{
			scrollTop: $('#map').offset().top
		},
		1500
	);
});
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
  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
        
