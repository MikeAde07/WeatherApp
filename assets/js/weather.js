var cityFormEl = document.querySelector("#user-form");
var cityEl = document.querySelector("#city-name");
var tempContainerEl = document.querySelector(".weather-reading"); 

var cityPrint = function(event) {
    event.preventDefault();
    var cityName = cityEl.value.trim(); 
    console.log(cityName);

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=9f453ac1ab352a74a17d76828edf7971&units=imperial";
    console.log(apiUrl);
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                cityWeather(data);
            })
        } 
        else {
            alert("Enter a valid location");
        }
    })
    .catch(function(error) {
        alert("Unable to connect to OneCall Weather");
    })
}



var cityWeather = function(address) {
    var temp = address.main.temp;
    var wind = address.wind.speed;
    var humidity = address.main.humidity;
    //var geoLng = address.results.geometry.location.lng;
    console.log(temp);
    var tempEl = document.createElement("h4");
    tempEl.className = "col-12";
    var cityNameEl = document.createElement("h2");
    cityNameEl.className = "col-6";
    var windEl = document.createElement("h4");
    windEl.className = "col-12";
    var humidityEl = document.createElement("h4");
    humidityEl.className = "col-6";
    windEl.textContent = "Wind: " + wind + " MPH";
    cityNameEl.textContent = cityEl.value.trim();
    tempEl.textContent = "Temp: " + temp;
    humidityEl.textContent = "Humidity: " + humidity;
    tempContainerEl.appendChild(cityNameEl);
    tempContainerEl.appendChild(tempEl);
}

cityFormEl.addEventListener("submit", cityPrint);