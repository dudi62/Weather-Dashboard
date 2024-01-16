# Weather Dashboard

This is a weather dashboard that runs in the browser and features dynamically updated HTML and CSS.

![2024-01-16](https://github.com/dudi62/Weather-Dashboard/assets/63518444/f9a847c3-bdfe-4b54-8d58-0a9cf19e6ae7)

## Features

- Fetches weather data for any city using the [OpenWeatherMap API](https://openweathermap.org/api).
- Displays a 5-day forecast including temperature, humidity, and wind speed.
- Stores search history in the browser's local storage.

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

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
