// Global variables
const apiKey = "d9a2240872b4360f971865d455ac8ed2";

// Function to fetch data from the API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        // Display an error message to the user
        alert("An error occurred while fetching data. Please try again.");
    }
}

// Function to get coordinates of a city
async function getCoordinates(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    const data = await fetchData(url);
    return { lat: data.coord.lat, lon: data.coord.lon };
}

// Function to get weather data
async function getWeatherData(cityName) {
    const coords = await getCoordinates(cityName);
    if (!coords) return;

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=metric`;
    const data = await fetchData(forecastUrl);
    updateUI(data); 
    updateHistory(cityName);
}
// formatDate function formats a timestamp into a date string
function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Function to update the UI with weather data
function updateUI(weatherData) {
// Update current weather
    const currentWeather = weatherData.list[0];
    const todayContainer = document.getElementById('today');
    todayContainer.innerHTML = `
        <h2>Current Weather in ${weatherData.city.name}</h2>
        <p>Date: ${formatDate(currentWeather.dt)}</p>
        <p>Temperature: ${currentWeather.main.temp}°C</p>
        <p>Humidity: ${currentWeather.main.humidity}%</p>
        <p>Wind Speed: ${currentWeather.wind.speed} m/s</p>
        <img src="http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png" alt="Weather icon">
    `;

// Update 5-day forecast
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '<h2>5-Day Forecast</h2>';
    weatherData.list.forEach((forecast, index) => {
        if (index % 8 === 0) {
            forecastContainer.innerHTML += `
                <div class="forecast-item">
                    <p>Date: ${formatDate(forecast.dt)}</p>
                    <p>Temperature: ${forecast.main.temp}°C</p>
                    <p>Humidity: ${forecast.main.humidity}%</p>
                    <p>Wind Speed: ${forecast.wind.speed} m/s</p>
                    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="Weather icon">
                </div>
            `;
        }
    });
}

// updateHistory function updates the search history with a given city name
function updateHistory(cityName) {
    let searchHistory = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];
    if (!searchHistory.includes(cityName)) {
        searchHistory.push(cityName);
        localStorage.setItem('weatherSearchHistory', JSON.stringify(searchHistory));
    }
    displayHistory();
}

// displayHistory function displays the search history
function displayHistory() {
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = '';
    let searchHistory = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];
    searchHistory.forEach(cityName => {
        addToHistoryList(cityName);
    });
}

// addToHistoryList function adds a city to the search history list
function addToHistoryList(cityName) {
    const historyContainer = document.getElementById('history');
    const historyItem = document.createElement('button');
    historyItem.textContent = cityName;
    historyItem.classList.add('list-group-item', 'list-group-item-action');
    historyItem.onclick = function () {
        getWeatherData(cityName);
    };
    historyContainer.appendChild(historyItem);
}

// Add an event listener to the search button to fetch weather data when clicked
document.getElementById('search-button').addEventListener('click', function(event) {
    event.preventDefault();
    const cityName = document.getElementById('search-input').value;
    getWeatherData(cityName);
});

// Display the search history when the page loads
window.onload = displayHistory;