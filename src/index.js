function displayTemperature (response) 
{

    console.log(response.data);
    console.log(response.data.main.temp)
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    temperatureElement.innerHTML = Math.round (response.data.main.temp);
    cityElement.innerHTML = response.data.name;
}

let apiKey = "3ae08bc66561a3f101f2a9b8b4f158c4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

