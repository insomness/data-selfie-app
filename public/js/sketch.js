function setup() {
  let lat, lon;

  // const button = document.getElementById("submit");
  // button.addEventListener("click", async (event) => {
  //   const mood = document.getElementById("mood").value;
  //   video.loadPixels();
  //   const image64 = video.canvas.toDataURL();
  //   const data = {
  //     lat,
  //     lon,
  //     mood,
  //     image64,
  //   };
  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const response = await fetch("/api", options);
  //   const json = await response.json();
  //   console.log(json);
  // });

  setInterval(async function () {
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    const data = {
      // lat,
      // lon,
      // mood,
      image64,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api", options);
    const json = await response.json();
    console.log(json);
  }, 2000);

  if ("geolocation" in navigator) {
    console.log("Geolocation is available");
    navigator.geolocation.getCurrentPosition(async (position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      document.getElementById("latitude").textContent = lat;
      document.getElementById("longitude").textContent = lon;
    });
  } else {
    console.log("geolocation IS NOT available");
  }

  noCanvas();
  const video = createCapture(VIDEO);
  video.size(0, 0);
}
