ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-179.935842, -54.665576, 180.140603, 35.491457]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Centroids_1 = new ol.format.GeoJSON();
var features_Centroids_1 = format_Centroids_1.readFeatures(json_Centroids_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Centroids_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroids_1.addFeatures(features_Centroids_1);
cluster_Centroids_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Centroids_1
});
var lyr_Centroids_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Centroids_1, 
                style: style_Centroids_1,
                popuplayertitle: 'Centroids',
                interactive: true,
                title: '<img src="styles/legend/Centroids_1.png" /> Centroids'
            });
var format_Collections_Point_2 = new ol.format.GeoJSON();
var features_Collections_Point_2 = format_Collections_Point_2.readFeatures(json_Collections_Point_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Collections_Point_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Collections_Point_2.addFeatures(features_Collections_Point_2);
cluster_Collections_Point_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Collections_Point_2
});
var lyr_Collections_Point_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Collections_Point_2, 
                style: style_Collections_Point_2,
                popuplayertitle: 'Collections_Point',
                interactive: true,
                title: '<img src="styles/legend/Collections_Point_2.png" /> Collections_Point'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Centroids_1.setVisible(true);lyr_Collections_Point_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Centroids_1,lyr_Collections_Point_2];
lyr_Centroids_1.set('fieldAliases', {'Id': 'Id', 'EventId': 'EventId', 'SiteAreaId': 'SiteAreaId', 'CreatedById': 'CreatedById', 'UpdatedById': 'UpdatedById', 'Status': 'Status', 'LengthInMetres': 'LengthInMetres', 'WidthInMetres': 'WidthInMetres', 'ItemisedPercentage': 'ItemisedPercentage', 'Litres': 'Litres', 'Kilos': 'Kilos', 'ExternalId': 'ExternalId', 'CreatedOn': 'CreatedOn', 'UpdatedOn': 'UpdatedOn', });
lyr_Collections_Point_2.set('fieldAliases', {'Id': 'Id', 'EventId': 'EventId', 'SiteAreaId': 'SiteAreaId', 'CreatedById': 'CreatedById', 'UpdatedById': 'UpdatedById', 'Status': 'Status', 'LengthInMetres': 'LengthInMetres', 'WidthInMetres': 'WidthInMetres', 'ItemisedPercentage': 'ItemisedPercentage', 'Litres': 'Litres', 'Kilos': 'Kilos', 'ExternalId': 'ExternalId', 'CreatedOn': 'CreatedOn', 'UpdatedOn': 'UpdatedOn', });
lyr_Centroids_1.set('fieldImages', {'Id': 'Range', 'EventId': 'Range', 'SiteAreaId': 'Range', 'CreatedById': 'Range', 'UpdatedById': 'Range', 'Status': 'Range', 'LengthInMetres': 'Range', 'WidthInMetres': 'Range', 'ItemisedPercentage': 'TextEdit', 'Litres': 'TextEdit', 'Kilos': 'TextEdit', 'ExternalId': 'Range', 'CreatedOn': 'DateTime', 'UpdatedOn': 'DateTime', });
lyr_Collections_Point_2.set('fieldImages', {'Id': 'TextEdit', 'EventId': 'Range', 'SiteAreaId': 'Range', 'CreatedById': 'Range', 'UpdatedById': 'Range', 'Status': 'Range', 'LengthInMetres': 'Range', 'WidthInMetres': 'Range', 'ItemisedPercentage': 'TextEdit', 'Litres': 'TextEdit', 'Kilos': 'TextEdit', 'ExternalId': 'Range', 'CreatedOn': 'DateTime', 'UpdatedOn': 'DateTime', });
lyr_Centroids_1.set('fieldLabels', {'Id': 'hidden field', 'EventId': 'hidden field', 'SiteAreaId': 'hidden field', 'CreatedById': 'hidden field', 'UpdatedById': 'hidden field', 'Status': 'hidden field', 'LengthInMetres': 'hidden field', 'WidthInMetres': 'hidden field', 'ItemisedPercentage': 'hidden field', 'Litres': 'inline label - visible with data', 'Kilos': 'inline label - visible with data', 'ExternalId': 'hidden field', 'CreatedOn': 'hidden field', 'UpdatedOn': 'hidden field', });
lyr_Collections_Point_2.set('fieldLabels', {'Id': 'hidden field', 'EventId': 'hidden field', 'SiteAreaId': 'hidden field', 'CreatedById': 'hidden field', 'UpdatedById': 'hidden field', 'Status': 'hidden field', 'LengthInMetres': 'hidden field', 'WidthInMetres': 'hidden field', 'ItemisedPercentage': 'hidden field', 'Litres': 'inline label - visible with data', 'Kilos': 'inline label - visible with data', 'ExternalId': 'hidden field', 'CreatedOn': 'hidden field', 'UpdatedOn': 'hidden field', });
lyr_Collections_Point_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});