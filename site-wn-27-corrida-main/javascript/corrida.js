//pegar a localizaçao
function pegarLocalizacao() {
  return new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      },
      (err) => {
        reject(err);
      }
    );

  });
} 
//mapa///
let map;
let origemMarker;

async function iniciarMapa() {

  const local = await pegarLocalizacao();

  map = L.map('map').setView([local.lat, local.lng], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  origemMarker = L.marker([local.lat, local.lng])
    .addTo(map)
    .bindPopup("Sua localização")
    .openPopup();

  localStorage.setItem("origemLat", local.lat);
  localStorage.setItem("origemLng", local.lng);
}

window.addEventListener("load", () => {
  iniciarMapa();
});


async function irMapa() {

  const destinoNome = document.getElementById("destino").value;

  const destinoRes = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${destinoNome}`
  );

  const destinoData = await destinoRes.json();
  const destino = destinoData[0];

  const origem = {
    lat: localStorage.getItem("origemLat"),
    lng: localStorage.getItem("origemLng")
  };

  const destinoLatLng = [destino.lat, destino.lon];

  L.marker([origem.lat, origem.lng]).addTo(map).bindPopup("Origem");
  L.marker(destinoLatLng).addTo(map).bindPopup("Destino");

  L.polyline([
    [origem.lat, origem.lng],
    destinoLatLng
  ], { color: "blue" }).addTo(map);

  map.fitBounds([
    [origem.lat, origem.lng],
    destinoLatLng
  ]);
}