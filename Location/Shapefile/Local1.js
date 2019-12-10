var graveloc =
{
"type": "FeatureCollection",
"name": "LOCALLL1",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Long": "38.784740", "Lat": "-75.920410" }, "geometry": { "type": "Point", "coordinates": [ -75.92041, 38.78474 ] } },
{ "type": "Feature", "properties": { "Long": "38.750150", "Lat": "-75.943270" }, "geometry": { "type": "Point", "coordinates": [ -75.94327, 38.75015 ] } },
{ "type": "Feature", "properties": { "Long": "38.754500", "Lat": "-75.932270" }, "geometry": { "type": "Point", "coordinates": [ -75.93227, 38.7545 ] } },
{ "type": "Feature", "properties": { "Long": "38.795260", "Lat": "-75.848380" }, "geometry": { "type": "Point", "coordinates": [ -75.84838, 38.79526 ] } },
{ "type": "Feature", "properties": { "Long": "38.728100", "Lat": "-75.892502" }, "geometry": { "type": "Point", "coordinates": [ -75.892502, 38.7281 ] } }
]
}

function GraveCol(feature) {
    return {
        radius: 4.35,
        fillColor: "#2773dd",
        weight: 2,
        opacity: 1,
        color: "#2773dd", weight: 1,
        dashArray: '2',
        fillOpacity: 0.8
    };
}