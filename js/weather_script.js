//document var
var textLocation = document.getElementById("inpLoc");
var temptxt = document.getElementById("tempmain");
var decriptxt = document.getElementById("temp_description");
var locationtxt = document.getElementById("temp_location");
//Other var
var weatherObj = "";
var apikey = "954f5d1613cca69dc1f28d4377f49824";
var xhttp = new XMLHttpRequest();
//function
function loadWeather() {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            weatherObj = JSON.parse(this.responseText);
            temptxt.innerHTML = Math.round(weatherObj.main.temp) + "°";
            decriptxt.innerHTML = weatherObj.weather[0].description;
            locationtxt.innerHTML = weatherObj.name + ", " + weatherObj.sys.country;
        }
    };
    if (parseInt(textLocation.value)) {
        xhttp.open("POST", "http://api.openweathermap.org/data/2.5/weather?zip=" + textLocation.value + "&units=metric&appid=" + apikey, true);
    }
    else {
        xhttp.open("POST", "http://api.openweathermap.org/data/2.5/weather?q=" + textLocation.value + "&units=metric&appid=" + apikey, true);
    }
    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    //xhttp.abort();
    textLocation.value = "";
}

function loadWeatherCoord(lat, long) {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            weatherObj = JSON.parse(this.responseText);
            temptxt.innerHTML = Math.round(weatherObj.main.temp) + "°";
            decriptxt.innerHTML = weatherObj.weather[0].description;
            locationtxt.innerHTML = weatherObj.name + ", " + weatherObj.sys.country;
        }
    };
    xhttp.open("POST", "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=metric&appid=" + apikey, true);
    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    //xhttp.abort();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    }
}

function showPosition(position) {
    loadWeatherCoord(position.coords.latitude, position.coords.longitude);
}
//Onload
//window.onload=function() {getLocation()};