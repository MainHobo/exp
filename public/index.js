helloExpress();
function helloExpress() {
  if ("geolocation" in navigator) {
    console.log("geolocation available");
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      document.getElementById("latitude").textContent = lat;
      document.getElementById("longitude").textContent = lon;

      const data = { lat, lon };
      fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    });
  } else {
    console.log("geolocation not available");
  }
  let html = "";
  html += `
    <p>
      Latitude: <span id="latitude"></span>&deg; <br />
      Longitude: <span id="longitude"></span>&deg;
    </p>
  `;
  document.getElementById("app").innerHTML = html;
}
