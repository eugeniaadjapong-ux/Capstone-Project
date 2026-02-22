function searchWeather(){
    const city = document.getElementById("cityInput").value;

    if(city === ""){
        document.getElementById("errorMessage").innerText = "Please enter a city name";
        return;
    }

    document.getElementById("errorMessage").innerText = "";
    document.getElementById("weatherCard").style.display = "block";

    document.getElementById("cityName").innerText = city;
}