import React, { useState } from "react";

function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "2c75e1af2ad690cc712cd871933a5d78"; // replace this

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
        }

        .app {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #74ebd5, #9face6);
        }

        .card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 20px;
          width: 320px;
          text-align: center;
          color: #fff;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .card h1 {
          margin-bottom: 20px;
        }

        .search-box {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .search-box input {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 10px;
          outline: none;
        }

        .search-box button {
          padding: 10px 15px;
          border: none;
          border-radius: 10px;
          background: #ffffff;
          color: #333;
          cursor: pointer;
          transition: 0.3s;
        }

        .search-box button:hover {
          background: #333;
          color: #fff;
        }

        .weather-info {
          margin-top: 20px;
        }

        .temp {
          font-size: 40px;
          font-weight: bold;
        }

        .loading {
          color: #fff;
          font-weight: 500;
        }

        .error {
          color: #ff4d4d;
          font-weight: 500;
        }
      `}</style>

      <div className="app">
        <div className="card">
          <h1>Weather Dashboard</h1>

          <div className="search-box">
            <input
              type="text"
              placeholder="Enter city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Search</button>
          </div>

          {loading && <p className="loading">Loading...</p>}
          {error && <p className="error">{error}</p>}

          {weather && (
            <div className="weather-info">
              <h2>{weather.name}</h2>
              <p className="temp">{weather.main.temp}°C</p>
              <p>{weather.weather[0].description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WeatherDashboard;
