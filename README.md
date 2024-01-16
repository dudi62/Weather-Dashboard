# Weather Dashboard

This is a weather dashboard that runs in the browser and features dynamically updated HTML and CSS.

![2024-01-16](https://github.com/dudi62/Weather-Dashboard/assets/63518444/f9a847c3-bdfe-4b54-8d58-0a9cf19e6ae7)

## Features

- Fetches weather data for any city using the [OpenWeatherMap API](https://openweathermap.org/api).
- Displays a 5-day forecast including temperature, humidity, and wind speed.
- Stores search history in the browser's local storage.

## JavaScript Functionality

The JavaScript functionality of this application is handled by `script.js` and is responsible for the dynamic behavior of the Weather Dashboard.

- `script.js`: This script handles the interaction with the OpenWeatherMap API and the manipulation of the HTML document. Here are the main functionalities:

  - **Fetch Weather Data**: When a city name is entered into the search box and the search button is clicked, a request is sent to the OpenWeatherMap API to fetch the current weather data and a 5-day forecast for that city.

  - **Display Weather Data**: The fetched weather data is then used to dynamically update the HTML content of the page, displaying the current weather and the 5-day forecast.

  - **Search History**: The script also manages the search history. When a city is searched, it is added to the search history which is displayed on the page. The search history is stored in the browser's local storage, so it persists across page reloads. When a city in the search history is clicked, the weather data for that city is fetched and displayed again.

  - **Error Handling**: If there is an error in fetching the weather data (for example, if an invalid city name is entered), an error message is displayed to the user.

Remember to replace `{API key}` in the API URL with your actual API key.

## Usage

1. Enter a city name in the search box and click the search button.
2. The current weather for that city, as well as a 5-day forecast, will be displayed on the page.
3. Your search will be saved in the search history. You can click on a city in the search history to view its weather again.

## Live Demo

You can see the live demo of the application at https://dudi62.github.io/Weather-Dashboard/

## API

This application uses the [5 Day Weather Forecast API](https://openweathermap.org/forecast5) from OpenWeatherMap. The base URL for API calls is `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`.

## Local Storage

The application uses `localStorage` to store the search history. The search history is saved as a list of city names.

## License

This project is licensed under the MIT License
