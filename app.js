// Initialize the map with a global view
var map = L.map('map').setView([22.0, -30.0], 3);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a polygon to cover the Gulf of Mexico
var gulfPolygon = L.polygon([
    [26.0, -98.0],  // Northwest edge near Texas
    [30.0, -95.0],  // Houston area
    [29.0, -92.0],  // Offshore Louisiana
    [30.0, -88.0],  // Offshore Mississippi/Alabama
    [28.0, -85.0],  // Near Florida Panhandle
    [27.0, -83.0],  // Near Tampa, Florida
    [25.0, -82.0],  // Southwest Florida coast
    [22.0, -85.0],  // Near western Cuba
    [21.0, -87.0],  // Northern Yucatan Peninsula
    [20.5, -91.0],  // Central Gulf of Mexico
    [18.5, -94.0],  // Southwestern Gulf, near Veracruz, Mexico
    [22.5, -96.0],  // Offshore Mexico, near Tampico
    [25.0, -97.0],  // Near Brownsville, Texas
    [26.0, -98.0]   // Close to the starting point, Texas
]).addTo(map);
gulfPolygon.bindPopup("This polygon roughly covers the Gulf of Mexico.");

// Add a marker inside the Gulf of Mexico polygon
var gulfMarker = L.marker([24.0, -90.0]).addTo(map);
gulfMarker.bindPopup("<b>Gulf of Mexico</b><br>This is the Gulf of Mexico.");

// Add a polygon to cover the Mumbai area in the Arabian Sea
var mumbaiPolygon = L.polygon([
    [21.0, 67.0],  // West of Pakistan
    [20.5, 68.5],  // Arabian Sea, near Pakistan
    [19.0, 70.0],  // Arabian Sea, further south
    [15.5, 72.0],  // Arabian Sea, southwest of Mangalore
    [12.5, 72.0],  // Southwest of Mangalore
    [12.5, 69.0],  // Back towards the west
    [16.5, 66.5],  // West of Mumbai
    [21.0, 67.0]   // Close to starting point
]).addTo(map);
mumbaiPolygon.bindPopup("This polygon roughly covers the Arabian Sea near Mumbai.");

// Add a marker in the Arabian Sea near Mumbai
var mumbaiMarker = L.marker([18.9, 72.8]).addTo(map);
mumbaiMarker.bindPopup("<b>Arabian Sea</b><br>This is the Arabian Sea near Mumbai.");
