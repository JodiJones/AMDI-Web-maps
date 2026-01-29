ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20030367.425747, -7297230.072439, 19778291.695267, 4230870.641447]);
var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Centroids_2 = new ol.format.GeoJSON();
var features_Centroids_2 = format_Centroids_2.readFeatures(json_Centroids_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroids_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroids_2.addFeatures(features_Centroids_2);
cluster_Centroids_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Centroids_2
});
var lyr_Centroids_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Centroids_2, 
                style: style_Centroids_2,
                popuplayertitle: 'Centroids',
                interactive: true,
                title: '<img src="styles/legend/Centroids_2.png" /> Centroids'
            });
var format_Collections_Point_3 = new ol.format.GeoJSON();
var features_Collections_Point_3 = format_Collections_Point_3.readFeatures(json_Collections_Point_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Collections_Point_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Collections_Point_3.addFeatures(features_Collections_Point_3);
cluster_Collections_Point_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Collections_Point_3
});
var lyr_Collections_Point_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Collections_Point_3, 
                style: style_Collections_Point_3,
                popuplayertitle: 'Collections_Point',
                interactive: true,
                title: '<img src="styles/legend/Collections_Point_3.png" /> Collections_Point'
            });

lyr_Satellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Centroids_2.setVisible(true);lyr_Collections_Point_3.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_GoogleSatelliteHybrid_1,lyr_Centroids_2,lyr_Collections_Point_3];
lyr_Centroids_2.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'eventid': 'eventid', 'siteareaid': 'siteareaid', 'createdbyid': 'createdbyid', 'updatedbyid': 'updatedbyid', 'status': 'status', 'lengthinmetres': 'lengthinmetres', 'widthinmetres': 'widthinmetres', 'itemisedpercentage': 'itemisedpercentage', 'litres': 'litres', 'kilos': 'kilos', 'externalid': 'externalid', 'createdon': 'createdon', 'updatedon': 'updatedon', });
lyr_Collections_Point_3.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'eventid': 'eventid', 'siteareaid': 'siteareaid', 'createdbyid': 'createdbyid', 'updatedbyid': 'updatedbyid', 'status': 'status', 'lengthinmetres': 'lengthinmetres', 'widthinmetres': 'widthinmetres', 'itemisedpercentage': 'itemisedpercentage', 'litres': 'litres', 'kilos': 'kilos', 'externalid': 'externalid', 'createdon': 'createdon', 'updatedon': 'updatedon', });
lyr_Centroids_2.set('fieldImages', {'qc_id': '', 'id': '', 'eventid': '', 'siteareaid': '', 'createdbyid': '', 'updatedbyid': '', 'status': '', 'lengthinmetres': '', 'widthinmetres': '', 'itemisedpercentage': '', 'litres': '', 'kilos': '', 'externalid': '', 'createdon': '', 'updatedon': '', });
lyr_Collections_Point_3.set('fieldImages', {'qc_id': '', 'id': '', 'eventid': '', 'siteareaid': '', 'createdbyid': '', 'updatedbyid': '', 'status': '', 'lengthinmetres': '', 'widthinmetres': '', 'itemisedpercentage': '', 'litres': '', 'kilos': '', 'externalid': '', 'createdon': '', 'updatedon': '', });
lyr_Centroids_2.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'eventid': 'no label', 'siteareaid': 'no label', 'createdbyid': 'no label', 'updatedbyid': 'no label', 'status': 'no label', 'lengthinmetres': 'no label', 'widthinmetres': 'no label', 'itemisedpercentage': 'no label', 'litres': 'no label', 'kilos': 'no label', 'externalid': 'no label', 'createdon': 'no label', 'updatedon': 'no label', });
lyr_Collections_Point_3.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'eventid': 'no label', 'siteareaid': 'no label', 'createdbyid': 'no label', 'updatedbyid': 'no label', 'status': 'no label', 'lengthinmetres': 'no label', 'widthinmetres': 'no label', 'itemisedpercentage': 'no label', 'litres': 'no label', 'kilos': 'no label', 'externalid': 'no label', 'createdon': 'no label', 'updatedon': 'no label', });
lyr_Collections_Point_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});