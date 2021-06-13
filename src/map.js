
// import { Loader } from "@googlemaps/js-api-loader"
// let map;

// const loader = new Loader({
//     apiKey: "YOUR_API_KEY",
//     version: "weekly",
//     ...additionalOptions,
// });
// loader.load().then(() => {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//     });
// });
// function initMap() {
//     const uluru = { lat: 49.244, lng: 28.5 }
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 10,
//         center: uluru,
//     })

//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//     })
// }
// export default initMap;


// let map, infoWindow;

// function InitialMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 6,
//     });
//     infoWindow = new google.maps.InfoWindow();
//     const locationButton = document.createElement("button");
//     locationButton.textContent = "Pan to Current Location";
//     locationButton.classList.add("custom-map-control-button");
//     map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//     locationButton.addEventListener("click", () => {
//         // Try HTML5 geolocation.
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const pos = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude,
//                     };
//                     infoWindow.setPosition(pos);
//                     infoWindow.setContent("Location found.");
//                     infoWindow.open(map);
//                     map.setCenter(pos);
//                 },
//                 () => {
//                     handleLocationError(true, infoWindow, map.getCenter());
//                 }
//             );
//         } else {
//             // Browser doesn't support Geolocation
//             handleLocationError(false, infoWindow, map.getCenter());
//         }
//     });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(
//         browserHasGeolocation
//             ? "Error: The Geolocation service failed."
//             : "Error: Your browser doesn't support geolocation."
//     );
//     infoWindow.open(map);
// }

// export default InitialMap;
// export default handleLocationError;