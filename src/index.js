let place = "Heitersheim";
let data;

async function getData(place) {
  let temperature;
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=968a55a8f1f641e2a59114004230711&q=${place}`,
    { mode: "cors" }
  );
  const weatherdata = await response.json();
  temperature = getTemperature(weatherdata);
  return temperature;
}

function getTemperature(object) {
  let data = object.current.temp_c;
  return data;
}

async function tellTemperature(place) {
  const response = await getData(place);
  console.log(`The temperatur in ${place} is ${response} °C`);
}

async function changeDOM(place, domText, domTemp) {
  const data = await getData(place);
  domText.innerHTML += `Die Temperatur in ${place} liegt bei`;
  domTemp.innerHTML += `${data} °C`;
}

const textbox = document.getElementById("text");
const tempbox = document.getElementById("temperatur");

changeDOM(place, textbox, tempbox);
