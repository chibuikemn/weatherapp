// src/services/api.js

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_WEATHER_API_URL;

// Get weather by city name
export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error('City not found');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

// Get 5-day forecast
export const getForecast = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=5`
    );
    
    if (!response.ok) {
      throw new Error('Forecast not available');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};

// Get weather by geolocation
export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error('Location weather not available');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather by coords:', error);
    throw error;
  }
};