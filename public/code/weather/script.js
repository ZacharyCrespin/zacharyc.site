if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    x.innerHTML = "Geolocation is not supported by this browser.";
}
function showPosition(position) {
  let lat = position.coords.latitude
  let lon = position.coords.longitude
  let key = "b915ca2f04c8c291455e9c7b584e6478"
  let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + key + "&units=imperial";
  fetch(url)
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response)
        document.getElementById("location").innerHTML = response.name + ", " + response.sys.country
        document.getElementById("temp").innerHTML = Math.round(response.main.temp) + "°"
        document.getElementById("minmax").innerHTML = Math.round(response.main.temp_min) + "° - " + Math.round(response.main.temp_max) + "°"
        document.getElementById("wind").innerHTML = "Wind Speed: " + response.wind.speed + " mph"
        document.getElementById("humidity").innerHTML = "Humidity: " + response.main.humidity + "%"
    })
}