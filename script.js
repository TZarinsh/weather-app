const form = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city-input");
const resultContainer = document.querySelector("#weather-result");


form.addEventListener("submit", function(event){

    event.preventDefault();
    const city = cityInput.value.trim();
    console.log("City entered", city);
    const apiKey = "547c28d681b88444ad7b2e9e80426a22";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log("Weather data: ", data);
    

    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const cityName = data.name;

resultContainer.innerHTML = `
  <h2>${cityName}</h2>
  <p>${description}</p>
  <p>${temperature}°C</p>
`;

})
.catch(error => {
    console.error("error fetching data!", error);
});
});