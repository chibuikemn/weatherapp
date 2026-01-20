// src/components/CurrentWeather.jsx
import WeatherIcon from './WeatherIcon';

const CurrentWeather = ({ data }) => {
  if (!data) {
    return <div className="current-weather">Search for a city to see weather</div>;
  }

  const { name, main, weather, wind } = data;
  const currentWeather = weather[0];

  return (
    <div className="current-weather">
      <h2>{name}</h2>
      <div className="weather-main">
        <WeatherIcon condition={currentWeather.main} size={80} />
        <div className="temp-container">
          <span className="temperature">{Math.round(main.temp)}°C</span>
          <span className="description">{currentWeather.description}</span>
        </div>
      </div>
      <div className="weather-details">
        <div className="detail">
          <span>Feels like</span>
          <span>{Math.round(main.feels_like)}°C</span>
        </div>
        <div className="detail">
          <span>Humidity</span>
          <span>{main.humidity}%</span>
        </div>
        <div className="detail">
          <span>Wind</span>
          <span>{Math.round(wind.speed)} m/s</span>
        </div>
        <div className="detail">
          <span>Pressure</span>
          <span>{main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;