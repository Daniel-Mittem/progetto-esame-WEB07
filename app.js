const weatherInfo = document.getElementById("weatherInfo");

const weatherIcons = {
  0: "☀️ Sole",
  1: "🌤️ Parzialmente nuvoloso",
  2: "⛅ Variabile",
  3: "☁️ Nuvoloso",
  45: "🌫️ Nebbia",
  48: "🌫️ Nebbia congelante",
  51: "🌦️ Pioggia leggera",
  61: "🌧️ Pioggia moderata",
  71: "❄️ Neve leggera",
  95: "⛈️ Temporale",

};

function getWeather() {
    weatherInfo.innerHTML = "📡 Caricamento meteo...";
  
    if (!navigator.geolocation) {
      weatherInfo.innerHTML = "⚠️ Geolocalizzazione non supportata dal browser.";
      return;
    }
  
    navigator.geolocation.getCurrentPosition(success, error);
}