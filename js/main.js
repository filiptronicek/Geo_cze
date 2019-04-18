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
addLatLong(49.56517, 13.882542, 'markb', 'Já');
addLatLong(49.56517, 13.882542, 'markb', 'Já');

//Rodiče
addLatLong(50.075539, 14.4378, 'markr', 'Rodiče');

//Ostatní
addLatLong(50.209431, 15.83263, 'markg', 'Ostatní');
addLatLong(50.355789, 15.91881, 'markg', 'Ostatní');
addLatLong(50.431389, 15.81471, 'markg', 'Ostatní');
addLatLong(50.560902, 15.91281, 'markg', 'Ostatní');
addLatLong(50.106179, 14.565828, 'markg', 'Ostatní');
addLatLong(49.746841, 13.37699, 'markg', 'Ostatní');
addLatLong(48.987495, 14.467283, 'markg', 'Ostatní');
addLatLong(50.766281, 15.054339, 'markg', 'Ostatní');
addLatLong(49.205777, 16.619575, 'markg', 'Ostatní');
addLatLong(50.241501, 15.490826, 'markg', 'Ostatní');
addLatLong(50.197599, 15.567634, 'markg', 'Ostatní');
addLatLong(50.25738, 15.775474, 'markg', 'Ostatní');
addLatLong(50.056984, 15.784956, 'markg', 'Ostatní');
addLatLong(50.161491, 14.39302, 'markg', 'Ostatní');
addLatLong(49.933498, 14.18461, 'markg', 'Ostatní');
addLatLong(50.2299, 17.20451, 'markg', 'Ostatní');
addLatLong(50.073589, 14.72968, 'markg', 'Ostatní');
addLatLong(50.416538, 16.163151, 'markg', 'Ostatní');
addLatLong(50.5853, 16.332455, 'markg', 'Ostatní');
addLatLong(50.479758, 16.182058, 'markg', 'Ostatní');
addLatLong(50.624149, 16.080681, 'markg', 'Ostatní');
addLatLong(50.237369, 15.63276, 'markg', 'Ostatní');
addLatLong(50.275031, 15.685834, 'markg', 'Ostatní');
addLatLong(50.360511, 14.216256, 'markg', 'Ostatní');
addLatLong(49.95908, 14.68493, 'markg', 'Ostatní');
addLatLong(50.256328, 15.815563, 'markg', 'Ostatní');
addLatLong(50.272449, 15.82012, 'markg', 'Ostatní');
addLatLong(50.358484, 15.751546, 'markg', 'Ostatní');
addLatLong(50.536895, 15.946029, 'markg', 'Ostatní');
addLatLong(50.525996, 15.919448, 'markg', 'Ostatní');
addLatLong(50.852222, 14.843667, 'markg', 'Ostatní');
addLatLong(50.724911, 15.1694, 'markg', 'Ostatní');
addLatLong(50.725479, 15.60659, 'markg', 'Ostatní');
addLatLong(50.69545, 15.7391, 'markg', 'Ostatní');
addLatLong(50.689983, 15.767944, 'markg', 'Ostatní');
addLatLong(50.07959, 12.37005, 'markg', 'Ostatní');
addLatLong(50.155027, 15.662682, 'markg', 'Ostatní');
addLatLong(49.973945, 15.567006, 'markg', 'Ostatní');
addLatLong(50.172573, 15.74256, 'markg', 'Ostatní');
addLatLong(50.152957, 15.557494, 'markg', 'Ostatní');
addLatLong(49.691101, 18.373575, 'markg', 'Ostatní');
addLatLong(50.775341, 15.42529, 'markg', 'Ostatní');
addLatLong(49.963848, 14.07366, 'markg', 'Ostatní');
addLatLong(49.936862, 14.134637, 'markg', 'Ostatní');
addLatLong(50.531376, 15.110463, 'markg', 'Ostatní');
addLatLong(50.404072, 15.68235, 'markg', 'Ostatní');
addLatLong(50.366089, 15.63184, 'markg', 'Ostatní');
addLatLong(50.40386, 15.68235, 'markg', 'Ostatní');
addLatLong(50.36614, 15.63192, 'markg', 'Ostatní');
addLatLong(49.7562053, 16.4688995, 'markg', 'Ostatní');
addLatLong(49.9021593, 16.4472039, 'markg', 'Ostatní');
addLatLong(50.1179339, 16.2903737, 'markg', 'Ostatní');
addLatLong(49.9737051, 16.3940676, 'markg', 'Ostatní');
addLatLong(50.1228, 16.213600000000042, 'markg', 'Ostatní');
addLatLong(50.1631, 16.274800000000027, 'markg', 'Ostatní');
addLatLong(49.8888354, 15.8389403, 'markg', 'Ostatní');
addLatLong(50.7137344, 15.3153896, 'markg', 'Ostatní');
addLatLong(50.6091761, 15.5064747, 'markg', 'Ostatní');
addLatLong(49.9109171, 15.3913205, 'markg', 'Ostatní');
addLatLong(50.4947616, 15.5149801, 'markg', 'Ostatní');
addLatLong(50.4370452, 15.3516528, 'markg', 'Ostatní');
addLatLong(50.4116187, 14.9031301, 'markg', 'Ostatní');
addLatLong(49.5285, 17.740099999999984, 'markg', 'Ostatní');
addLatLong(50.0764, 15.6798, 'markg', 'Ostatní');
addLatLong(50.0401412, 15.5603286, 'markg', 'Ostatní');
addLatLong(50.0653985, 15.7788463, 'markg', 'Ostatní');
addLatLong(50.1073719, 16.2609892, 'markg', 'Ostatní');
addLatLong(50.6149738, 16.2666573, 'markg', 'Ostatní');
addLatLong(50.5642825, 14.6553399, 'markg', 'Ostatní');
addLatLong(50.5410394, 15.2029478, 'markg', 'Ostatní');
addLatLong(50.4670857, 15.1721593, 'markg', 'Ostatní');
addLatLong(50.4801, 14.938800000000015, 'markg', 'Ostatní');
addLatLong(49.6071, 15.579500000000053, 'markg', 'Ostatní');
addLatLong(49.5940567, 17.251143, 'markg', 'Ostatní');
addLatLong(49.9511458, 15.7947559, 'markg', 'Ostatní');
addLatLong(50.2676907, 16.1145157, 'markg', 'Ostatní');
addLatLong(50.2921062, 16.1605457, 'markg', 'Ostatní');
addLatLong(50.2995707, 15.8645911, 'markg', 'Ostatní');
addLatLong(50.1513634, 16.0776973, 'markg', 'Ostatní');
addLatLong(50.2626451, 15.9225386, 'markg', 'Ostatní');
addLatLong(50.2007842, 15.993087, 'markg', 'Ostatní');
addLatLong(50.1288359, 15.7382058, 'markg', 'Ostatní');
addLatLong(50.1598194, 15.7837191, 'markg', 'Ostatní');
addLatLong(50.1534, 15.82490000000007, 'markg', 'Ostatní');
addLatLong(50.3946, 16.04359999999997, 'markg', 'Ostatní');
addLatLong(50.4037707, 16.116637, 'markg', 'Ostatní');
addLatLong(50.6268042, 15.4976913, 'markg', 'Ostatní');
addLatLong(48.8982142, 13.775945, 'markg', 'Ostatní');
addLatLong(50.1290964, 16.1812824, 'markg', 'Ostatní');

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
