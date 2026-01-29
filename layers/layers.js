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
var format_Collections_Point_1 = new ol.format.GeoJSON();
var features_Collections_Point_1 = format_Collections_Point_1.readFeatures(json_Collections_Point_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Collections_Point_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Collections_Point_1.addFeatures(features_Collections_Point_1);
cluster_Collections_Point_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Collections_Point_1
});
var lyr_Collections_Point_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Collections_Point_1, 
                style: style_Collections_Point_1,
                popuplayertitle: 'Collections_Point',
                interactive: true,
                title: '<img src="styles/legend/Collections_Point_1.png" /> Collections_Point'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Collections_Point_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Collections_Point_1];
lyr_Collections_Point_1.set('fieldAliases', {'Id': 'Id', 'EventId': 'EventId', 'SiteAreaId': 'SiteAreaId', 'CreatedById': 'CreatedById', 'UpdatedById': 'UpdatedById', 'Status': 'Status', 'LengthInMetres': 'LengthInMetres', 'WidthInMetres': 'WidthInMetres', 'ItemisedPercentage': 'ItemisedPercentage', 'Litres': 'Litres', 'Kilos': 'Kilos', 'ExternalId': 'ExternalId', 'CreatedOn': 'CreatedOn', 'UpdatedOn': 'UpdatedOn', });
lyr_Collections_Point_1.set('fieldImages', {'Id': 'TextEdit', 'EventId': 'Range', 'SiteAreaId': 'Range', 'CreatedById': 'Range', 'UpdatedById': 'Range', 'Status': 'Range', 'LengthInMetres': 'Range', 'WidthInMetres': 'Range', 'ItemisedPercentage': 'TextEdit', 'Litres': 'TextEdit', 'Kilos': 'TextEdit', 'ExternalId': 'Range', 'CreatedOn': 'DateTime', 'UpdatedOn': 'DateTime', });
lyr_Collections_Point_1.set('fieldLabels', {'Id': 'hidden field', 'EventId': 'hidden field', 'SiteAreaId': 'hidden field', 'CreatedById': 'hidden field', 'UpdatedById': 'hidden field', 'Status': 'hidden field', 'LengthInMetres': 'inline label - visible with data', 'WidthInMetres': 'inline label - visible with data', 'ItemisedPercentage': 'inline label - visible with data', 'Litres': 'inline label - visible with data', 'Kilos': 'inline label - visible with data', 'ExternalId': 'hidden field', 'CreatedOn': 'hidden field', 'UpdatedOn': 'hidden field', });
lyr_Collections_Point_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});