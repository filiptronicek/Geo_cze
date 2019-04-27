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
addLatLong(49.03342, 14.793798, 'markb', 'Já');
addLatLong(49.84079, 18.29088, 'markb', 'Já');
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
addLatLong(50.410751, 14.90281, 'markb', 'Já');
addLatLong(50.22821, 14.88357, 'markb', 'Já');
addLatLong(48.639328, 14.22932, 'markb', 'Já');
addLatLong(48.657278, 14.369968, 'markb', 'Já');
addLatLong(50.362979, 12.929926, 'markb', 'Já');
addLatLong(50.409734, 12.924454, 'markb', 'Já');
addLatLong(49.471874, 14.761347, 'markb', 'Já');
addLatLong(50.416538, 16.163151, 'markb', 'Já');
addLatLong(49.755959, 16.46946, 'markb', 'Já');
addLatLong(48.810719, 14.31502, 'markb', 'Já');
addLatLong(50.45, 15.233333, 'markb', 'Já');
addLatLong(50.69545, 15.7391, 'markb', 'Já');
addLatLong(49.907222, 12.9725, 'markb', 'Já');
addLatLong(49.56517, 13.882542, 'markb', 'Já');
addLatLong(49.688931, 14.00959, 'markb', 'Já');
addLatLong(50.431389, 15.81471, 'markb', 'Já');
addLatLong(49.933498, 14.18461, 'markb', 'Já');
addLatLong(50.423611, 14.253889, 'markb', 'Já');
addLatLong(49.991944, 14.655556, 'markb', 'Já');
addLatLong(50.8098646, 15.0974994, 'markb', 'Já');
addLatLong(49.3869258, 14.6165674, 'markb', 'Já');
addLatLong(50.3986005, 15.8856915, 'markb', 'Já');
addLatLong(50.0033784, 15.1552739, 'markb', 'Já');
addLatLong(50.6091761, 15.5064747, 'markb', 'Já');
addLatLong(50.2598479, 14.5175086, 'markb', 'Já');
addLatLong(50.6607076, 14.9957954, 'markb', 'Já');
addLatLong(50.3520785, 14.4748281, 'markb', 'Já');
addLatLong(50.8901392, 15.1903612, 'markb', 'Já');
addLatLong(50.4947616, 15.5149801, 'markb', 'Já');
addLatLong(50.7240899, 15.1710958, 'markb', 'Já');

//Rodiče
addLatLong(50.075539, 14.4378, 'markr', 'Rodiče');
addLatLong(50.2235905, 12.185766, 'markr', 'Rodiče');
addLatLong(50.2235905, 12.185766, 'markr', 'Rodiče');
addLatLong(49.9739518, 12.703319, 'markr', 'Rodiče');
addLatLong(50.2305, 12.87110000000007, 'markr', 'Rodiče');
addLatLong(49.4407069, 12.9298338, 'markr', 'Rodiče');
addLatLong(49.7477415, 13.3775249, 'markr', 'Rodiče');
addLatLong(48.9747357, 14.474285, 'markr', 'Rodiče');
addLatLong(49.1870098, 14.7073838, 'markr', 'Rodiče');
addLatLong(50.3629787, 12.9299257, 'markr', 'Rodiče');
addLatLong(50.1815641, 12.640035, 'markr', 'Rodiče');
addLatLong(50.3016928, 12.9434469, 'markr', 'Rodiče');
addLatLong(50.6684322, 14.0408798, 'markr', 'Rodiče');
addLatLong(50.7824196, 14.2147221, 'markr', 'Rodiče');
addLatLong(50.5340795, 14.1317985, 'markr', 'Rodiče');
addLatLong(50.1435834, 14.1905224, 'markr', 'Rodiče');
addLatLong(49.7818921, 14.6869121, 'markr', 'Rodiče');
addLatLong(50.7702648, 15.0583947, 'markr', 'Rodiče');
addLatLong(50.4231117, 14.2619508, 'markr', 'Rodiče');
addLatLong(50.6607076, 14.9957954, 'markr', 'Rodiče');
addLatLong(49.0037313, 14.7705054, 'markr', 'Rodiče');
addLatLong(49.2313907, 13.5204076, 'markr', 'Rodiče');
addLatLong(49.1374249, 13.2350287, 'markr', 'Rodiče');
addLatLong(49.9919444, 14.6542365, 'markr', 'Rodiče');
addLatLong(49.9394003, 14.1882078, 'markr', 'Rodiče');
addLatLong(49.0522, 14.434300000000007, 'markr', 'Rodiče');
addLatLong(50.4116, 14.903099999999995, 'markr', 'Rodiče');
addLatLong(50.4370452, 15.3516528, 'markr', 'Rodiče');
addLatLong(50.2094963, 15.832719, 'markr', 'Rodiče');
addLatLong(50.3555088, 15.9185723, 'markr', 'Rodiče');
addLatLong(50.1619072, 14.2586153, 'markr', 'Rodiče');
addLatLong(49.471874, 14.7613473, 'markr', 'Rodiče');
addLatLong(50.2417701, 15.4907692, 'markr', 'Rodiče');
addLatLong(50.432, 15.813999999999965, 'markr', 'Rodiče');
addLatLong(50.5608851, 15.9130498, 'markr', 'Rodiče');
addLatLong(50.6935744, 15.7335607, 'markr', 'Rodiče');
addLatLong(49.7149137, 16.2653869, 'markr', 'Rodiče');
addLatLong(49.0285949, 15.9776566, 'markr', 'Rodiče');
addLatLong(50.3584844, 15.7515464, 'markr', 'Rodiče');
addLatLong(49.4630917, 16.4609483, 'markr', 'Rodiče');
addLatLong(50.6663343, 15.5481647, 'markr', 'Rodiče');
addLatLong(49.9511458, 15.7947559, 'markr', 'Rodiče');
addLatLong(50.1513634, 16.0776973, 'markr', 'Rodiče');
addLatLong(49.99247, 14.40618, 'markr', 'Rodiče');
addLatLong(50.5368946, 15.9460294, 'markr', 'Rodiče');
addLatLong(49.0986985, 13.9757138, 'markr', 'Rodiče');
addLatLong(50.0288894, 15.2011571, 'markr', 'Rodiče');
addLatLong(49.9486561, 15.2681123, 'markr', 'Rodiče');
addLatLong(48.8117771, 14.3143386, 'markr', 'Rodiče');
addLatLong(50.149751, 15.1283075, 'markr', 'Rodiče');
addLatLong(50.0744692, 14.8607574, 'markr', 'Rodiče');
addLatLong(50.1091982, 14.8549955, 'markr', 'Rodiče');
addLatLong(50.1921305, 14.4938986, 'markr', 'Rodiče');
addLatLong(49.3869258, 14.6165674, 'markr', 'Rodiče');
addLatLong(50.5691486, 14.9256846, 'markr', 'Rodiče');
addLatLong(49.1922443, 16.6113382, 'markr', 'Rodiče');
addLatLong(49.8349139, 18.2820084, 'markr', 'Rodiče');
addLatLong(49.5940567, 17.251143, 'markr', 'Rodiče');
addLatLong(49.396064, 15.5903065, 'markr', 'Rodiče');
addLatLong(49.7321319, 14.667401, 'markr', 'Rodiče');
addLatLong(50.736021, 15.7395965, 'markr', 'Rodiče');
addLatLong(50.0831053, 17.2318103, 'markr', 'Rodiče');
addLatLong(50.3864009, 14.289478, 'markr', 'Rodiče');
addLatLong(50.5337837, 14.7217684, 'markr', 'Rodiče');
addLatLong(48.8068577, 16.6383914, 'markr', 'Rodiče');
addLatLong(48.799919, 16.8033931, 'markr', 'Rodiče');
addLatLong(48.8554341, 16.0489457, 'markr', 'Rodiče');
addLatLong(50.5608851, 15.9130498, 'markr', 'Rodiče');
addLatLong(50.4560543, 15.6867082, 'markr', 'Rodiče');
addLatLong(49.4587958, 18.1429843, 'markr', 'Rodiče');
addLatLong(50.2296385, 17.2046012, 'markr', 'Rodiče');
addLatLong(49.1051011, 13.3786939, 'markr', 'Rodiče');
addLatLong(49.5652002, 15.4104397, 'markr', 'Rodiče');
addLatLong(49.6901444, 14.0103663, 'markr', 'Rodiče');
addLatLong(50.1478497, 14.1025379, 'markr', 'Rodiče');
addLatLong(49.9640292, 14.0733907, 'markr', 'Rodiče');
addLatLong(50.3520785, 14.4748281, 'markr', 'Rodiče');
addLatLong(50.7258788, 15.433522, 'markr', 'Rodiče');
addLatLong(49.200119, 16.0648086, 'markr', 'Rodiče');
addLatLong(50.0764166, 15.6798078, 'markr', 'Rodiče');
addLatLong(50.1544, 15.460299999999961, 'markr', 'Rodiče');
addLatLong(50.3986005, 15.8856915, 'markr', 'Rodiče');
addLatLong(50.2938855, 16.1111963, 'markr', 'Rodiče');
addLatLong(50.6268042, 15.4976913, 'markr', 'Rodiče');
addLatLong(49.5776163, 14.5394561, 'markr', 'Rodiče');
addLatLong(50.6189263, 16.108519, 'markr', 'Rodiče');
addLatLong(49.2984191, 17.3929804, 'markr', 'Rodiče');
addLatLong(50.4167811, 16.1630918, 'markr', 'Rodiče');
addLatLong(50.3442064, 16.1512997, 'markr', 'Rodiče');

//Ostatní
addLatLong(50.209431, 15.83263, 'markg', 'Strýc');
addLatLong(50.355789, 15.91881, 'markg', 'Strýc');
addLatLong(50.431389, 15.81471, 'markg', 'Strýc');
addLatLong(50.560902, 15.91281, 'markg', 'Strýc');
addLatLong(50.106179, 14.565828, 'markg', 'Strýc');
addLatLong(49.746841, 13.37699, 'markg', 'Strýc');
addLatLong(48.987495, 14.467283, 'markg', 'Strýc');
addLatLong(50.766281, 15.054339, 'markg', 'Strýc');
addLatLong(49.205777, 16.619575, 'markg', 'Strýc');
addLatLong(50.241501, 15.490826, 'markg', 'Strýc');
addLatLong(50.197599, 15.567634, 'markg', 'Strýc');
addLatLong(50.25738, 15.775474, 'markg', 'Strýc');
addLatLong(50.056984, 15.784956, 'markg', 'Strýc');
addLatLong(50.161491, 14.39302, 'markg', 'Strýc');
addLatLong(49.933498, 14.18461, 'markg', 'Strýc');
addLatLong(50.2299, 17.20451, 'markg', 'Strýc');
addLatLong(50.073589, 14.72968, 'markg', 'Strýc');
addLatLong(50.416538, 16.163151, 'markg', 'Strýc');
addLatLong(50.5853, 16.332455, 'markg', 'Strýc');
addLatLong(50.479758, 16.182058, 'markg', 'Strýc');
addLatLong(50.624149, 16.080681, 'markg', 'Strýc');
addLatLong(50.237369, 15.63276, 'markg', 'Strýc');
addLatLong(50.275031, 15.685834, 'markg', 'Strýc');
addLatLong(50.360511, 14.216256, 'markg', 'Strýc');
addLatLong(49.95908, 14.68493, 'markg', 'Strýc');
addLatLong(50.256328, 15.815563, 'markg', 'Strýc');
addLatLong(50.272449, 15.82012, 'markg', 'Strýc');
addLatLong(50.358484, 15.751546, 'markg', 'Strýc');
addLatLong(50.536895, 15.946029, 'markg', 'Strýc');
addLatLong(50.525996, 15.919448, 'markg', 'Strýc');
addLatLong(50.852222, 14.843667, 'markg', 'Strýc');
addLatLong(50.724911, 15.1694, 'markg', 'Strýc');
addLatLong(50.725479, 15.60659, 'markg', 'Strýc');
addLatLong(50.69545, 15.7391, 'markg', 'Strýc');
addLatLong(50.689983, 15.767944, 'markg', 'Strýc');
addLatLong(50.07959, 12.37005, 'markg', 'Strýc');
addLatLong(50.155027, 15.662682, 'markg', 'Strýc');
addLatLong(49.973945, 15.567006, 'markg', 'Strýc');
addLatLong(50.172573, 15.74256, 'markg', 'Strýc');
addLatLong(50.152957, 15.557494, 'markg', 'Strýc');
addLatLong(49.691101, 18.373575, 'markg', 'Strýc');
addLatLong(50.775341, 15.42529, 'markg', 'Strýc');
addLatLong(49.963848, 14.07366, 'markg', 'Strýc');
addLatLong(49.936862, 14.134637, 'markg', 'Strýc');
addLatLong(50.531376, 15.110463, 'markg', 'Strýc');
addLatLong(50.404072, 15.68235, 'markg', 'Strýc');
addLatLong(50.366089, 15.63184, 'markg', 'Strýc');
addLatLong(50.40386, 15.68235, 'markg', 'Strýc');
addLatLong(50.36614, 15.63192, 'markg', 'Strýc');
addLatLong(49.7562053, 16.4688995, 'markg', 'Strýc');
addLatLong(49.9021593, 16.4472039, 'markg', 'Strýc');
addLatLong(50.1179339, 16.2903737, 'markg', 'Strýc');
addLatLong(49.9737051, 16.3940676, 'markg', 'Strýc');
addLatLong(50.1228, 16.213600000000042, 'markg', 'Strýc');
addLatLong(50.1631, 16.274800000000027, 'markg', 'Strýc');
addLatLong(49.8888354, 15.8389403, 'markg', 'Strýc');
addLatLong(50.7137344, 15.3153896, 'markg', 'Strýc');
addLatLong(50.6091761, 15.5064747, 'markg', 'Strýc');
addLatLong(49.9109171, 15.3913205, 'markg', 'Strýc');
addLatLong(50.4947616, 15.5149801, 'markg', 'Strýc');
addLatLong(50.4370452, 15.3516528, 'markg', 'Strýc');
addLatLong(50.4116187, 14.9031301, 'markg', 'Strýc');
addLatLong(49.5285, 17.740099999999984, 'markg', 'Strýc');
addLatLong(50.0764, 15.6798, 'markg', 'Strýc');
addLatLong(50.0401412, 15.5603286, 'markg', 'Strýc');
addLatLong(50.0653985, 15.7788463, 'markg', 'Strýc');
addLatLong(50.1073719, 16.2609892, 'markg', 'Strýc');
addLatLong(50.6149738, 16.2666573, 'markg', 'Strýc');
addLatLong(50.5642825, 14.6553399, 'markg', 'Strýc');
addLatLong(50.5410394, 15.2029478, 'markg', 'Strýc');
addLatLong(50.4670857, 15.1721593, 'markg', 'Strýc');
addLatLong(50.4801, 14.938800000000015, 'markg', 'Strýc');
addLatLong(49.6071, 15.579500000000053, 'markg', 'Strýc');
addLatLong(49.5940567, 17.251143, 'markg', 'Strýc');
addLatLong(49.9511458, 15.7947559, 'markg', 'Strýc');
addLatLong(50.2676907, 16.1145157, 'markg', 'Strýc');
addLatLong(50.2921062, 16.1605457, 'markg', 'Strýc');
addLatLong(50.2995707, 15.8645911, 'markg', 'Strýc');
addLatLong(50.1513634, 16.0776973, 'markg', 'Strýc');
addLatLong(50.2626451, 15.9225386, 'markg', 'Strýc');
addLatLong(50.2007842, 15.993087, 'markg', 'Strýc');
addLatLong(50.1288359, 15.7382058, 'markg', 'Strýc');
addLatLong(50.1598194, 15.7837191, 'markg', 'Strýc');
addLatLong(50.1534, 15.82490000000007, 'markg', 'Strýc');
addLatLong(50.3946, 16.04359999999997, 'markg', 'Strýc');
addLatLong(50.4037707, 16.116637, 'markg', 'Strýc');
addLatLong(50.6268042, 15.4976913, 'markg', 'Strýc');
addLatLong(48.8982142, 13.775945, 'markg', 'Strýc');
addLatLong(50.1290964, 16.1812824, 'markg', 'Strýc');

//Martina
addLatLong(49.488945, 12.7194624, 'marko', 'Martina');
addLatLong(49.5474224, 18.2117067, 'marko', 'Martina');
addLatLong(49.4588, 18.14300000000003, 'marko', 'Martina');
addLatLong(49.4322, 18.288599999999974, 'marko', 'Martina');
addLatLong(49.4896099, 18.2651488, 'marko', 'Martina');
addLatLong(49.4420083, 18.4531685, 'marko', 'Martina');
addLatLong(49.3989218, 18.410385, 'marko', 'Martina');
addLatLong(49.1922443, 16.6113382, 'marko', 'Martina');
addLatLong(49.8349139, 18.2820084, 'marko', 'Martina');
addLatLong(49.59889, 18.144798, 'marko', 'Martina');
addLatLong(49.5873149, 18.1174624, 'marko', 'Martina');
addLatLong(49.6238084, 18.2218883, 'marko', 'Martina');
addLatLong(49.5637085, 18.1072205, 'marko', 'Martina');
addLatLong(49.539165, 18.1142521, 'marko', 'Martina');
addLatLong(49.5930718, 18.3596301, 'marko', 'Martina');
addLatLong(49.226766, 17.6667415, 'marko', 'Martina');
addLatLong(48.8554341, 16.0489457, 'marko', 'Martina');
addLatLong(48.8068577, 16.6383914, 'marko', 'Martina');
addLatLong(48.799919, 16.8033931, 'marko', 'Martina');
addLatLong(48.7406838, 16.7551753, 'marko', 'Martina');
addLatLong(48.9473112, 16.3134526, 'marko', 'Martina');
addLatLong(50.2676907, 16.1145157, 'marko', 'Martina');
addLatLong(50.6262304, 15.8164318, 'marko', 'Martina');
addLatLong(50.5339466, 16.0497807, 'marko', 'Martina');
addLatLong(50.5608851, 15.9130498, 'marko', 'Martina');
addLatLong(50.6313766, 15.7818364, 'marko', 'Martina');
addLatLong(50.8770981, 14.5762837, 'marko', 'Martina');
addLatLong(50.8123052, 14.5355712, 'marko', 'Martina');
addLatLong(50.5525754, 16.0521036, 'marko', 'Martina');
addLatLong(50.757878, 14.5554953, 'marko', 'Martina');
addLatLong(50.3520785, 14.4748281, 'marko', 'Martina');
addLatLong(49.9400702, 13.0041771, 'marko', 'Martina');
addLatLong(50.0269173, 12.6201458, 'marko', 'Martina');
addLatLong(50.1224, 12.348899999999958, 'marko', 'Martina');
addLatLong(49.8812, 12.977899999999977, 'marko', 'Martina');
addLatLong(49.9615242, 12.6675691, 'marko', 'Martina');
addLatLong(50.1860008, 12.7540466, 'marko', 'Martina');
addLatLong(50.2304694, 12.8710769, 'marko', 'Martina');
addLatLong(42.6073975, 25.4856617, 'marko', 'Martina');
addLatLong(50.0793511, 12.3703526, 'marko', 'Martina');
addLatLong(51.003217, 14.4530321, 'marko', 'Martina');
addLatLong(50.9216775, 15.0794594, 'marko', 'Martina');
addLatLong(50.7702648, 15.0583947, 'marko', 'Martina');
addLatLong(47.9275812, 18.4782757, 'marko', 'Martina');
addLatLong(50.8901392, 15.1903612, 'marko', 'Martina');
addLatLong(50.0558831, 16.3994139, 'marko', 'Martina');
addLatLong(50.8522229, 14.8436667, 'marko', 'Martina');
addLatLong(50.8171929, 14.9687813, 'marko', 'Martina');
addLatLong(49.999953, 14.0023688, 'marko', 'Martina');
addLatLong(50.0139958, 13.9554618, 'marko', 'Martina');
addLatLong(50.2853689, 15.0204889, 'marko', 'Martina');
addLatLong(50.5691486, 14.9256846, 'marko', 'Martina');
addLatLong(49.1242328, 15.7688528, 'marko', 'Martina');
addLatLong(50.0094935, 14.7308229, 'marko', 'Martina');
addLatLong(49.9822632, 14.7617424, 'marko', 'Martina');
addLatLong(49.9702457, 14.8097767, 'marko', 'Martina');
addLatLong(50.1483911, 14.3333294, 'marko', 'Martina');
addLatLong(50.6684322, 14.0408798, 'marko', 'Martina');
addLatLong(50.7824196, 14.2147221, 'marko', 'Martina');
addLatLong(50.8739272, 14.2402549, 'marko', 'Martina');
addLatLong(50.1317791, 14.3387291, 'marko', 'Martina');
addLatLong(50.1355328, 14.2825414, 'marko', 'Martina');
addLatLong(50.1747676, 14.7369934, 'marko', 'Martina');
addLatLong(50.2016983, 14.832757, 'marko', 'Martina');
addLatLong(50.3229582, 14.9366725, 'marko', 'Martina');
addLatLong(50.291767, 14.8260014, 'marko', 'Martina');
addLatLong(50.6607076, 14.9957954, 'marko', 'Martina');
addLatLong(50.7720406, 15.1691346, 'marko', 'Martina');
addLatLong(49.4612085, 16.4653034, 'marko', 'Martina');
addLatLong(50.1816237, 14.6610298, 'marko', 'Martina');
addLatLong(50.4116, 14.903099999999995, 'marko', 'Martina');
addLatLong(50.1999551, 14.6786406, 'marko', 'Martina');
addLatLong(50.2306933, 14.0868501, 'marko', 'Martina');
addLatLong(49.8172194, 14.216702, 'marko', 'Martina');
addLatLong(49.7813749, 14.1704372, 'marko', 'Martina');
addLatLong(49.8311759, 14.222829, 'marko', 'Martina');
addLatLong(49.9394003, 14.1882078, 'marko', 'Martina');
addLatLong(50.1934993, 14.3722727, 'marko', 'Martina');
addLatLong(49.9919444, 14.6542365, 'marko', 'Martina');
addLatLong(49.9700763, 14.6658044, 'marko', 'Martina');
addLatLong(49.9483814, 14.6773911, 'marko', 'Martina');
addLatLong(50.0621519, 14.6384615, 'marko', 'Martina');
addLatLong(49.9640292, 14.0733907, 'marko', 'Martina');
addLatLong(49.9119542, 13.9779864, 'marko', 'Martina');
addLatLong(49.3951183, 13.2935954, 'marko', 'Martina');
addLatLong(49.4407069, 12.9298338, 'marko', 'Martina');
addLatLong(49.7477415, 13.3775249, 'marko', 'Martina');
addLatLong(49.933503, 13.3895611, 'marko', 'Martina');
addLatLong(49.0845637, 13.6973767, 'marko', 'Martina');
addLatLong(49.0864767, 13.6541126, 'marko', 'Martina');
addLatLong(49.1369, 13.729100000000017, 'marko', 'Martina');
addLatLong(50.6268042, 15.4976913, 'marko', 'Martina');
addLatLong(50.7596171, 15.3658974, 'marko', 'Martina');
addLatLong(50.7327738, 14.9839199, 'marko', 'Martina');
addLatLong(50.1039674, 13.7333385, 'marko', 'Martina');
addLatLong(50.132647, 13.7820994, 'marko', 'Martina');
addLatLong(50.172134, 13.7755685, 'marko', 'Martina');
addLatLong(49.9224718, 14.6390582, 'marko', 'Martina');
addLatLong(50.149751, 15.1283075, 'marko', 'Martina');
addLatLong(50.4370452, 15.3516528, 'marko', 'Martina');
addLatLong(49.594881, 18.0102584, 'marko', 'Martina');
addLatLong(50.5606303, 15.1997567, 'marko', 'Martina');
addLatLong(50.4670857, 15.1721593, 'marko', 'Martina');
addLatLong(50.1478497, 14.1025379, 'marko', 'Martina');
addLatLong(50.2113977, 13.9825476, 'marko', 'Martina');

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
