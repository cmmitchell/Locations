var graveloc =
{
"type": "FeatureCollection",
"name": "GraveSharp2",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Long": 38.78474, "Lat": -75.92041 }, "geometry": { "type": "Point", "coordinates": [ 38.78474, -75.92041 ] } },
{ "type": "Feature", "properties": { "Long": 38.75015, "Lat": -75.94327 }, "geometry": { "type": "Point", "coordinates": [ 38.75015, -75.94327 ] } },
{ "type": "Feature", "properties": { "Long": 38.7545, "Lat": -75.93227 }, "geometry": { "type": "Point", "coordinates": [ 38.7545, -75.93227 ] } },
{ "type": "Feature", "properties": { "Long": 38.79526, "Lat": -75.84838 }, "geometry": { "type": "Point", "coordinates": [ 38.79526, -75.84838 ] } },
{ "type": "Feature", "properties": { "Long": 38.7280998, "Lat": -75.8925018 }, "geometry": { "type": "Point", "coordinates": [ 38.7280998, -75.8925018 ] } }
]
}

function GraveCol(feature) {
	switch (feature.properties.Type) {
		default: return {radius: 1.25, fillColor: "#0099FF", weight: 1, fillOpacity: 1, color: "#000000", weight: 1, opacity: 1};
   };
}