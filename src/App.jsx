// src/App.jsx
import { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import { getWeatherByCity, getForecast, getWeatherByCoords } from './services/api';
import './styles.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load default city on first render
  useEffect(() => {
    handleSearch('London'); // Default city
  }, []);

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    
    try {
      let weather;
      
      if (city === null) {
        // Use geolocation
        const position = await getCurrentPosition();
        weather = await getWeatherByCoords(position.coords.latitude, position.coords.longitude);
      } else {
        // Use city name
        weather = await getWeatherByCity(city);
      }
      
      const forecast = await getForecast(weather.name);
      
      setWeatherData(weather);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported'));
      }
      
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌤️ Weather App</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      
      <main className="app-main">
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">Error: {error}</div>}
        
        {!loading && !error && (
          <>
            <CurrentWeather data={weatherData} />
            <Forecast forecastData={forecastData} />
          </>
        )}
      </main>
      
      <footer className="app-footer">
        <p>Built with React & OpenWeatherMap API</p>
      </footer>
    </div>
  );
}

export default App;