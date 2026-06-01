# WeatherApp

A vanilla JavaScript weather app built from scratch. Search any city and get current weather data in real time.

**[Live demo →](#)** *(add your GitHub Pages link here)*

---

## What it does

- Search any city by name
- Displays current temperature, weather condition, wind speed, and humidity
- Changes the weather icon dynamically based on conditions (clear, clouds, rain)
- Hides stats until a search is performed

---

## Technical breakdown

### Fetch API + OpenWeatherMap

Weather data comes from the [OpenWeatherMap Current Weather API](https://openweathermap.org/api). On click, the app builds a URL with the city name and API key, fetches it, converts the response to JSON, and injects the data into the DOM.

```js
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
  .then(response => response.json())
  .then(data => { /* update DOM */ });
```

### Dynamic icon switching

The API returns a `weather[0].main` field with values like `"Clouds"`, `"Clear"`, or `"Rain"`. The app uses a conditional block to swap the icon image accordingly.

### DOM manipulation

Elements are grabbed with `getElementById` and shown or hidden via `style.display` — stats only appear after the first successful search.

---

## Structure

```
├── index.html      → Markup
├── style.css       → All styles
├── script.js       → Fetch logic + DOM updates
├── search.png      → Search icon
└── icons/
    ├── cloudy.png
    ├── rainy.png
    └── sun.png
```

---

## Built with

- HTML, CSS, JavaScript — zero dependencies, zero frameworks
- OpenWeatherMap API (free tier)
- GitHub Pages

---

*In progress — more weather conditions and a 5-day forecast coming soon.*
