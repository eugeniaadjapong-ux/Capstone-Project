const apiKey = "d74e4400ce973d53846a229da9b77c91";

function searchWeather(){

    let city = document.getElementById("cityInput").value;

    if(city === ""){
        document.getElementById("errorMessage").innerText = "Please enter a city name.";
        return;
    }

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey)
    .then(function(response){

        if(!response.ok){
            throw new Error("City not found");
        }

        return response.json();
    })
    .then(function(data){

        document.getElementById("weatherCard").style.display = "block";
        document.getElementById("errorMessage").innerText = "";

        document.getElementById("recommendation").innerText = "";

        let weatherMain = data.weather[0].main;
        let recommendation = "";

        if(data.main.temp <= 10){
            recommendation = "❄️ It is cold. Wear warm clothes.";
        }
        else if(data.main.temp > 10 && data.main.temp <= 25){
            recommendation = "🌤️ Mild weather. Light jacket is fine.";
        }
        else{
            recommendation = "☀️ Wear light clothes and sunglasses.";
        }

        document.getElementById("cityName").innerText = data.name;

        document.getElementById("temperature").innerText =
            "Temperature: " + data.main.temp + "°C";

        document.getElementById("condition").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            data.main.humidity + "%";

        document.getElementById("wind").innerText =
            data.wind.speed + " m/s";

        document.getElementById("recommendation").innerText = recommendation;

    })
    .catch(function(){
        document.getElementById("errorMessage").innerText =
            "City not found or network error.";
    });
}