// src/components/WeatherIcon.jsx

const WeatherIcon = ({ condition, size = 50 }) => {
  // Simple icon mapping - you can replace with actual icons
  const getIcon = (condition) => {
    const weather = condition.toLowerCase();
    
    if (weather.includes('clear')) return '☀️';
    if (weather.includes('cloud')) return '☁️';
    if (weather.includes('rain')) return '🌧️';
    if (weather.includes('snow')) return '❄️';
    if (weather.includes('thunder')) return '⛈️';
    if (weather.includes('mist') || weather.includes('fog')) return '🌫️';
    
    return '🌈';
  };

  return (
    <div style={{ fontSize: `${size}px` }}>
      {getIcon(condition)}
    </div>
  );
};

export default WeatherIcon;