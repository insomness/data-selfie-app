getData();

async function getData() {
  const response = await fetch("/api");
  const data = await response.json();
  console.log(data);

  for (item of data) {
    const root = document.createElement("p");
    const br = document.createElement("br");
    const mood = document.createElement("div");
    const geo = document.createElement("div");
    const date = document.createElement("div");
    const image = document.createElement("img");
    image.alt = "fitrah silly faces";

    mood.textContent = `mood: ${item.mood}`;
    geo.textContent = `${item.lat}°, ${item.lon}°`;
    const dateString = new Date(item.timestamp).toDateString();
    date.textContent = dateString;
    image.src = item.image64;

    root.append(mood, geo, date, br, image);
    document.body.append(root);
  }
}
