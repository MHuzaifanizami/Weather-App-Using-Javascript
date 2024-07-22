// Getting elements ****************************
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let conditionImage = document.getElementById("condition-img");
let mainImage = document.querySelector(".container-box");

// Dates methods ***************************
let today = new Date();
let date = today.getDate();
let month = today.getMonth() +1;
let year = today.getFullYear();
let dates = document.getElementById("date");

// Api Cofiguration **********************************
const apiKey = "628985bb9ae78bc3ac2a1bb714d4e7d7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

let getData = (cityName, cb) => {
    fetch(`${apiUrl}?q=${cityName}&units=metric&appid=${apiKey}`)
        .then((res) => res.json())
        .then((res) => cb(res));

}
dates.innerHTML = `${date}-${month}-${year}`

// btn listener 
btn.addEventListener("click", () => {


    const cityName = input.value;
    if (cityName) {
        getData(cityName, (data) => {
            console.log(data)
            if (data && data.name) {
                document.getElementById("weather").innerHTML = data.weather[0].main;
                console.log(data.weather[0].main)
                document.getElementById("city").innerHTML = data.name;
                document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + "°C";
                document.getElementById("humidity").innerHTML = data.main.humidity + "%";
                document.getElementById("feels-like").innerHTML = Math.round(data.main.feels_like) + "°C";
                document.getElementById("wind").innerHTML = Math.round(data.wind.speed) + " km/h";

                // Weather  Icon ************* 
                if (document.getElementById("weather").innerHTML == "sunny") {
                    conditionImage.src = "./assets/sun.png"


                } else if (document.getElementById("weather").innerHTML == "Clouds") {
                    conditionImage.src = "./assets/cloud.png"
                    mainImage.style.backgroundImage = "url('./assets/cloudy.jpg')"

                } else if (document.getElementById("weather").innerHTML == "Rain") {
                    conditionImage.src = "./assets/rainy.png"
                    mainImage.style.backgroundImage = "url('./assets/rainy-img.jpg')"

                } else if (document.getElementById("weather").innerHTML == "Haze") {
                    conditionImage.src = "./assets/haze-icon.png"
                    mainImage.style.backgroundImage = "url('./assets/haze.jpg')"

                } else if (document.getElementById("weather").innerHTML == "Clear") {
                    conditionImage.src = "./assets/haze-icon.png"
                    mainImage.style.backgroundImage = "url('https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg?ga=GA1.2.571373999.1716519406&semt=ais_user')"
                }
            }
            else {
                document.getElementById("city").innerHTML = "City not found. Please try again.";
            }
        });
    } else {
        document.getElementById("city").innerHTML = "Please enter a city name.";
    }


});

///////////////////////////////////////////////////////////////
