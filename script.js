const form = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city-input");
const resultContainer = document.querySelector("#weather-result");


form.addEventListener("submit", function(event){

    event.preventDefault();
    const city = cityInput.value.trim();
    console.log("City entered", city);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log("Weather data: ", data);
    
if(data.cod === "404"){
    resultContainer.innerHTML = `<p> City not found. Please try again.</p>`;
    return;
}
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const cityName = data.name;
    const formattedDescription = description.charAt(0).toUpperCase() + description.slice(1);

resultContainer.innerHTML = `
  <h2>${cityName}</h2>
  <p>${formattedDescription}</p>
  <p>${temperature}°C</p>
`;

})
.catch(error => {
    console.error("error fetching data!", error);
});
});