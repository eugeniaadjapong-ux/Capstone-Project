const apiKey = "44bc83bb3ca0223412f2001862321cd7";

async function searchWeather(){
    const city = document.getElementById("cityInput").value;

    if(city === ""){
        document.getElementById("errorMessage").innerText = "Please enter a city name";
        return;
    }

    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("weatherCard").style.display = "block";
        document.getElementById("errorMessage").innerText = "";

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText =
            "Temperature: " + data.main.temp + "°C";

        document.getElementById("condition").innerText =
            data.weather[0].description;

    } catch(error){
        document.getElementById("errorMessage").innerText =
            "City not found or network error";
    }
}