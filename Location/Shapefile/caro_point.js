var points =
{
"type": "FeatureCollection",
"name": "caro_point",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": 1, "Name": "Calvary Baptist Church", "Use": "Main Location" }, "geometry": { "type": "Point", "coordinates": [ -75.816072592980831, 38.882555467825178 ] } },
{ "type": "Feature", "properties": { "id": 2, "Name": "Crane Baptist Park", "Use": "Park" }, "geometry": { "type": "Point", "coordinates": [ -75.855916680908265, 38.840480651950308 ] } }
]
}

function pointcol(feature) {
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
