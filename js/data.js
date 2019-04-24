var colors = [
	'deep-orange',
	'brown',
	'yellow',
	'amber',
	'orange',
	'green',
	'light-green',
	'lime',
	'light-blue',
	'cyan',
	'teal',
	'deep-purple',
	'indigo',
	'blue',
	'red',
	'pink',
	'purple',
	'blue-grey'
];
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
	'Český Krumlov',
	'Samšina',
	'Pec pod Sněžkou',
	'Bezdružice',
	'Vševily',
	'Příbram',
	'Dvůr Králové nad Labem',
	'Karlštejn',
	'Roudnice nad Labem',
	'Říčany',
	'Bedřichov',
	'Slapy',
	'Kuks',
	'Peklo',
	'Jilemnice',
	'Neratovice',
	'Český Dub',
	'Mělník',
	'Lázně Libverda',
	'Nová Paka',
	'Jablonec nad Nisou'
];
var Martina = [
	'Lysá Hora',
	'Frenstat pod Radhoštěm',
	'Rožnov pod Radhoštěm',
	'Horní Bečva',
	'Pustevny',
	'Bílá',
	'Bumbálka',
	'Brno',
	'Ostrava',
	'Kopřivnice',
	'Stramberk',
	'Hukvaldy',
	'Zenklava',
	'Verovice',
	'Frýdlant nad Ostravicí',
	'Zlín',
	'Znojmo',
	'Mikulov',
	'Lednice',
	'Valtice',
	'Miroslav',
	'Opočno',
	'Svoboda nad Upou',
	'Malé Svatonovice',
	'Trutnov',
	'Janské Lázně',
	'Jiřetín pod Jedlovou',
	'Kytlice',
	'Žaltman',
	'Nový Bor',
	'Mělník',
	'Uterý',
	'Lázně Kynžvart',
	'Františkovy lázně',
	'Konstantinovy lázně',
	'Velká Hledsebe',
	'Mariánské Lázně',
	'Loket',
	'Karlovy Vary',
	'Aš',
	'Cheb',
	'Sluknov',
	'Frýdlant',
	'Liberec',
	'Jablonec',
	'Lázně Libverda',
	'Hejnice',
	'Hrádek nad nisou',
	'Chrastava',
	'Nižbor',
	'Zloukovice',
	'Loučen',
	'Mukařov',
	'Babice',
	'Babičky',
	'Lounovice',
	'Jevany',
	'Černý Vůl',
	'Ustí nad Labem',
	'Děčín',
	'Hřensko',
	'Horoměřice',
	'Tuchoměřice',
	'Káraný',
	'Lysá nad Labem',
	'Luštěnice',
	'Benátky nad Jizerou',
	'Český Dub',
	'Janov nad Nisou',
	'Bedřichov',
	'Brandýs nad Labem',
	'Mladá Boleslav',
	'Stará Boleslav',
	'Slaný',
	'Voznice',
	'Dobříš',
	'Nový ves pod Pleší',
	'Karlštejn',
	'Libčice na Vltavou',
	'Ríčany',
	'Světice',
	'Stránčice',
	'Koloděje',
	'Beroun',
	'Zdice',
	'Klatovy',
	'Domažlice',
	'Plzeň',
	'Plasy',
	'Zdíkov',
	'Bláhov',
	'Vacov',
	'Jizerka',
	'Kořenov',
	'Ještěd',
	'Rakovník',
	'Lužná u Rakovníka',
	'Krušovice',
	'Velké Popovice',
	'Poděbrady',
	'Jičín',
	'Nový Jičín',
	'Sedmihorky',
	'Sobotka',
	'Kladno',
	'Malíkovice',
	'Hvězda',
	'Ceské Budějovice',
	'Třebon',
	'Chlum u Třeboně',
	'Votice',
	'Bučovice u Votic',
	'Pacov',
	'Lukavec',
	'Načeradec',
	'Vlašim',
	'Benešov',
	'Ceský Sternberk',
	'Lipnice nad Sázavou',
	'Dobrá nad Sázavou',
	'Havlíčkův Brod',
	'Chotěboř',
	'Pardubice',
	'Kunětická Hora',
	'Světlá nad Sázavou',
	'Zdár nad Sázavou',
	'Nové město na Moravě',
	'Nové Město nad Metují',
	'Kaly',
	'Hýskov',
	'Velké Meziříčí',
	'Tišnov',
	'Kuřim',
	'Slavonice',
	'Písek',
	'Telč',
	'Bavorov',
	'Vodnany',
	'Helfenburk',
	'Sušice',
	'Dalešice',
	'Uvaly',
	'Uhrineves',
	'Celadná',
	'Jaroměř',
	'Hradec Králové',
	'Jeseník',
	'Hranice na Moravě',
	'Mošnov',
	'Příbor',
	'Frýdek Místek',
	'Morávka',
	'Mochov',
	'Peklo',
	'Ratibořice',
	'Landštejn',
	'Strakonice',
	'Mirošovice u Prahy',
	'Senohraby',
	'Hostivice',
	'Chrudim',
	'Mšené Lázně',
	'Mělník',
	'Líbeznice',
	'Bořanovice',
	'Neratovice',
	'Nová ves u Kralup',
	'Kralupy',
	'Osečná',
	'Tuřany',
	'Divice',
	'Postoloprty',
	'Ciněves',
	'Dymokury',
	'Loštice',
	'Mohelnice',
	'Rudná',
	'Masojedy',
	'Mlékojedy',
	'Hrusice',
	'Týn nad Vltavou',
	'Týnec nad Sázavou',
	'Pec pod Sněžkou',
	'Jilemnice',
	'Prostějov',
	'Vrchlabí',
	'Spindlerův Mlýn',
	'Suchomasty',
	'Revničov',
	'Kozojedy',
	'Horní Vidim',
	'Kostelec nad Černými lesy',
	'Vimperk',
	'Zadní Třebán',
	'Slapy',
	'Buš',
	'Plzeň',
	'Jindřichův Hradec',
	'Hronov',
	'Jáchymov',
	'Heroltice'
];
var Rodice = [
	'Aš',
	'Cheb',
	'Mariánské lázně',
	'Karlovy Vary',
	'Domažlice',
	'Plzeň',
	'České Budějovice',
	'Veselí nad Lužnicí',
	'Rozvadov',
	'Jáchymov',
	'Sokolov',
	'Ostrov nad Ohří',
	'Ústí nad Labem',
	'Děčín',
	'Litoměřice',
	'Lidice',
	'Benešov',
	'Liberec',
	'Roudnice nad Labem',
	'Český dub',
	'Třeboň',
	'Sušice',
	'Železná Ruda',
	'Říčany',
	'Karlštejn',
	'Hluboká nad Vltavou',
	'Mladá Boleslav',
	'Jičín',
	'Hradec Králové',
	'Jaroměř',
	'Okoř',
	'Ratibořice',
	'Nový Bydžov',
	'Dvůr Králové nad Labem',
	'Trutnov',
	'Pec pod Sněžkou',
	'Polička',
	'Rozkoš',
	'Velký Vřešťov',
	'Bedřichov',
	'Benecko',
	'Chrudim',
	'Týniště nad Orlicí',
	'Týnec nad Vltavou',
	'Starý Rokytník',
	'Konopiště',
	'Kolín',
	'Kutná Hora',
	'Český Krumlov',
	'Poděbrady',
	'Český Brod',
	'Kounice',
	'Líbeznice',
	'Slapy',
	'Mukařov',
	'Brno',
	'Ostrava',
	'Olomouc',
	'Jihlava',
	'Bystřice',
	'Sněžka',
	'Praděd',
	'Říp',
	'Bezděz',
	'Mikulov',
	'Lednice',
	'Znojmo',
	'Trutnov',
	'Zvičina',
	'Rožnov pod Radhoštěm',
	'Jeseník',
	'Prášily',
	'Orlík',
	'Příbram',
	'Kladno',
	'Beroun',
	'Mělník',
	'Rokytnice nad Jizerou',
	'Studenec',
	'Lázně Bohdaneč',
	'Chlumec nad Cidlinou',
	'Kuks',
	'Dobuška',
	'Jizerka',
	'Prčice',
	'Adršpach',
	'Kroměříž',
	'Náchod',
	'Nové Město nad Metují'
];

//myarr.indexOf('turtles') > -1; //420 day m8s
Ales.forEach(AlesFunc);
Filip.forEach(FilipFunc);
Martina.forEach(MartinaFunc);
Rodice.forEach(RodiceFunc);

function AlesFunc(item, index) {
	var realIndex = index + 1;

	var randomElem = Math.floor(Math.random() * 1000000000);
	var randomElemEl = '#' + randomElem;
	console.log('Renderování <li> elementu pro ' + item + ', které je v seznamu ' + realIndex + '. (Aleš list)');
	var map =
		'<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=' +
		encodeURIComponent(item) +
		'&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>';
	var link =
		" <li><a id='location' class='" + randomElem + "'onClick='openMap(\"" + item + '")\'>' + item + '</a></li>';

	document.getElementById('ales').innerHTML += link + '<br />';
	var back = [ '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e67e22' ];
	var rand = back[Math.floor(Math.random() * back.length)];
	console.log(rand);
	console.log(randomElemEl);
	$(randomElemEl).css('background', rand);
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
function MartinaFunc(item, index) {
	var realIndex = index + 1;
	console.log('Renderování <li> elementu pro ' + item + ', které je v seznamu ' + realIndex + '. (Filip list)');
	var map =
		'<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=' +
		encodeURIComponent(item) +
		'&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>';
	var link = " <li><a id='location' onClick='openMap(\"" + item + '")\'>' + item + '</a></li>';

	document.getElementById('martina').innerHTML += link + '<br />';
}
function RodiceFunc(item, index) {
	var realIndex = index + 1;
	console.log('Renderování <li> elementu pro ' + item + ', které je v seznamu ' + realIndex + '. (Filip list)');
	var map =
		'<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=' +
		encodeURIComponent(item) +
		'&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>';
	var link = " <li><a id='location' onClick='openMap(\"" + item + '")\'>' + item + '</a></li>';

	document.getElementById('rodice').innerHTML += link + '<br />';
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
		'<iframe width="100%" height="800" id="gmap_canvas" src="https://maps.google.com/maps?q=' +
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
$(document).ready(function() {
	var randomColor = colors[Math.floor(Math.random() * colors.length)];
	//var randomShoot = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
	$('#toTop').removeClass('red');
	$('#toTop').addClass(randomColor);
	//$('#toTop').css('background', '#' + ((Math.random() * 0xffffff) << 0).toString(16));
	//$('flag1').attr('fill', randomShoot);
});
