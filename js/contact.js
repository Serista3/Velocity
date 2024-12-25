const receiveData = async function () {
  try {
    const urlData = await fetch("https://restcountries.com/v3.1/all");
    if (!urlData.ok) throw new Error("Cannot get response.");
    const data = await urlData.json();
    const randomIndex = Math.floor(Math.random() * 100);
    return data[randomIndex];
  } catch (err) {
    alert(err.message);
  }
};

const getPositionSuccess = function (p) {
  const lat = p.coords.latitude;
  const longi = p.coords.longitude;
  creatMap(lat, longi);
};

const getPositionFail = function (err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
    default:
      alert("Geolocaiton are not allow.");
  }
};

const checkGelocation = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      getPositionSuccess,
      getPositionFail
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

const creatMap = function (lat, longi) {
  var map = L.map("map").setView([lat, longi], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([lat, longi])
    .addTo(map)
    .bindPopup("London is beautiful city.")
    .openPopup();

  var popup = L.popup();

  function onMapClick(e) {
    console.log(e);
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
  }

  map.on("click", onMapClick);
};

checkGelocation();
