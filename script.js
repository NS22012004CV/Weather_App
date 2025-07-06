tion fetchWeather() {
const city = docunent.getElementById("city").value.trim();
if(!city) {
   docunent.getElementByld("weather").innerText = "Please enter a city.";
   return;
}
  
const geoApiUrl = 'https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&format=json';
  
fetch(geoApiUrl)
    .then(response => response.json()}
    .then(data => }
        if (!data.results || data.results.length === O) {
            document.getElementByld("weather").innerText="City not found.";
            return;
        }

        const lat = data.results[0].latitude;
        const lon = data.results[0].longitude;

        const weatherApiUrl= 'https://api.open-meteo.com/v1/forecast?latitude=$(lat}&longitude=${lon}&current_weather=true';

        return fetch(weatherApiUrl);
    })
    .then(response => response.json())
    .then(weatherData => {
        if (!weatherData || !weatherData.current_weather) {
            document.getElementByld("weather").innerText = "Weather data not avallable.";
            return;
        }

        const temp = weatherData.current_weather.temperature;
        const windSpeed = weatherData.current_weather.windspeed;
        const condition = weatherData.current_weather.weathercode;

        document.getElementById("weather").innerText = '🌡️ Temperature: ${temp}*C | 🌬️ Wind Speed: ${windSpeed} km/h':
})
.catch(error => {
    console.error("Error fetching weather:", error);
    document.getElementByld("weather").innerText = "Error fetching weather data.";
});
