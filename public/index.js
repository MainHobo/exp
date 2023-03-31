helloExpress();
function helloExpress() {
  if ("geolocation" in navigator) {
    console.log("geolocation available");
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  } else {
    console.log("geolocation not available");
  }

  let html = "";
  html += `
        <h1>Geolocation</h1>
    `;
  document.getElementById("app").innerHTML = html;
}
