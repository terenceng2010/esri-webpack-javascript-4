const Map = require("esri/Map");
const MapView = require("esri/views/MapView");

var map = new Map({
    basemap: "streets"
});

var view = new MapView({
    container: "map",  // Reference to the DOM node that will contain the view
    map: map,  // Reference to the map object created before the scene
    zoom: 8,  // Sets the zoom level based on level of detail (LOD)
    center: [-118, 34.5]  // Sets the center point of view in lon/lat
});