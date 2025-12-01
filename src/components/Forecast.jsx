// src/components/Forecast.jsx
import WeatherIcon from './WeatherIcon';

const Forecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) {
    return null;
  }

  // Take only 5 days (OpenWeatherMap returns 40 items for 5-day forecast)
  const dailyForecasts = forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 5);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {dailyForecasts.map((day, index) => (
          <div key={index} className="forecast-card">
            <span className="forecast-day">{formatDate(day.dt)}</span>
            <WeatherIcon condition={day.weather[0].main} size={40} />
            <div className="forecast-temp">
              <span className="max-temp">{Math.round(day.main.temp_max)}°</span>
              <span className="min-temp">{Math.round(day.main.temp_min)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;