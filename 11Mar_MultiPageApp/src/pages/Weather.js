import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("Bangalore");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "2c75e1af2ad690cc712cd871933a5d78";

  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setWeather(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Weather Page</h1>

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <button onClick={fetchWeather}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;