map = new OpenLayers.Map('mapdiv');
map.addLayer(new OpenLayers.Layer.OSM());

epsg4326 = new OpenLayers.Projection('EPSG:4326'); //WGS 1984 projection
projectTo = map.getProjectionObject(); //The map projection (Spherical Mercator)

var lonLat = new OpenLayers.LonLat(15.594311, 49.854596).transform(epsg4326, projectTo);

var zoom = 8.4;
map.setCenter(lonLat, zoom);

var vectorLayer = new OpenLayers.Layer.Vector('Overlay');

// Define markers as "features" of the vector layer:
function addLatLong(lat, long, img, desc) {
	var feature = new OpenLayers.Feature.Vector(
		new OpenLayers.Geometry.Point(long, lat).transform(epsg4326, projectTo),
		{ description: 'Skupina: ' + desc },
		{
			externalGraphic: 'img/' + img + '.png',
			graphicHeight: 25,
			graphicWidth: 21,
			graphicXOffset: -12,
			graphicYOffset: -25
		}
	);
	vectorLayer.addFeatures(feature);
}
// Já
// addLatLong(, 'markb', 'Já');

addLatLong(50.124372, 14.484508, 'markb', 'Já');
addLatLong(50.075539, 14.4378, 'markb', 'Já');
addLatLong(50.209431, 15.83263, 'markb', 'Já');
addLatLong(50.034309, 15.781199, 'markb', 'Já');
addLatLong(50.075539, 14.4378, 'markb', 'Já');
addLatLong(49.03342, 14.793798, 'markb', 'Já');
addLatLong(49.84079, 18.29088, 'markb', 'Já');
addLatLong(50.075539, 14.4378, 'markb', 'Já');
addLatLong(50.686649, 14.53713, 'markb', 'Já');
addLatLong(50.241501, 15.490826, 'markb', 'Já');
addLatLong(49.195061, 16.606836, 'markb', 'Já');
addLatLong(50.192131, 14.493899, 'markb', 'Já');
addLatLong(50.109198, 14.854996, 'markb', 'Já');
addLatLong(49.94825, 15.26797, 'markb', 'Já');
addLatLong(50.660938, 14.0327, 'markb', 'Já');
addLatLong(50.78175, 14.21456, 'markb', 'Já');
addLatLong(49.577616, 14.539456, 'markb', 'Já');
addLatLong(50.725479, 15.60659, 'markb', 'Já');
addLatLong(50.355789, 15.91881, 'markb', 'Já');
addLatLong(49.746841, 13.37699, 'markb', 'Já');
addLatLong(50.766281, 15.054339, 'markb', 'Já');
addLatLong(50.23204, 12.87099, 'markb', 'Já');
addLatLong(48.973911, 14.47502, 'markb', 'Já');

//Rodiče
addLatLong(50.075539, 14.4378, 'markr', 'Rodiče');

map.addLayer(vectorLayer);

//Add a selector control to the vectorLayer with popup functions
var controls = {
	selector: new OpenLayers.Control.SelectFeature(vectorLayer, { onSelect: createPopup, onUnselect: destroyPopup })
};

function createPopup(feature) {
	feature.popup = new OpenLayers.Popup
		.FramedCloud(
		'pop',
		feature.geometry.getBounds().getCenterLonLat(),
		null,
		'<div class="markerContent">' + feature.attributes.description + '</div>',
		null,
		true,
		function() {
			controls['selector'].unselectAll();
		}
	);
	//feature.popup.closeOnMove = true;
	map.addPopup(feature.popup);
}

function destroyPopup(feature) {
	feature.popup.destroy();
	feature.popup = null;
}

map.addControl(controls['selector']);
controls['selector'].activate();
