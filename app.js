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
  
    function success(position) {
      const lat = position.coords.latitude.toFixed(4);
      const lon = position.coords.longitude.toFixed(4);
  
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code`;
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const meteo = data.current;
          const code = meteo.weather_code;
          const icona = weatherIcons[code] || "❓ Codice meteo: " + code;
  
          weatherInfo.innerHTML = `
            <div class="weather-icon">${icona}</div>
            <div><strong>Temperatura:</strong> ${meteo.temperature_2m} °C</div>
            <div><strong>Umidità:</strong> ${meteo.relative_humidity_2m}%</div>
            <div><strong>Pioggia:</strong> ${meteo.precipitation} mm</div>
            <div><strong>Nuvole:</strong> ${meteo.cloud_cover}%</div>
            <div><strong>Vento:</strong> ${meteo.wind_speed_10m} km/h</div>
          `;
        })
    }
}