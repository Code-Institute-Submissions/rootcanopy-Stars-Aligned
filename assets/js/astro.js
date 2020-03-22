
//MAKING A MAP AND TILES
var mymap = L.map("myEarth").setView([0, 0], 2);
let attribution = '&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
    

tiles.addTo(mymap);

// MAKING A MARKER WITH CUSTOM ICON
let myIcon = L.icon({
    iconUrl: "assets/pic/thefloater.png",
    iconSize: [50, 30],
    iconAnchor: [25, 16]
});

const marker = L.marker([0, 0], {icon: myIcon}).addTo(mymap);
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

/*let firstTime = true;*/

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
     const { latitude, longitude } = data;

    marker.setLatLng([latitude, longitude]);
    mymap.setView([latitude, longitude], 3);
    document.getElementById('lat').textContent = latitude.toFixed(2);
    document.getElementById('lon').textContent = longitude.toFixed(2);    
        /*console.log(latitude);
        console.log(longitude);*/
 
        /*marker.setLatLng([latitude, longitude]);
    if (firstTime) {
        
        firstTime = false;
    }*/
}   

//getISS();

setInterval(getISS, 10000);

