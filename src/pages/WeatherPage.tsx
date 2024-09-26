import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { AppDispatch } from '../app/store';
import { fetchWeather, clearWeather } from '../features/weatherSlice';

const WeatherPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: weather, status, error, lastUpdated } = useSelector(
    (state: RootState) => (state as any).weather
  );
  
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeather(city.trim()));
    }
  };

  const formatLastUpdated = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Weather Information</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-1 p-2 border rounded"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {status === 'loading' ? 'Loading...' : 'Get Weather'}
          </button>
        </div>
      </form>

      {status === 'loading' && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="mt-2">Fetching weather data...</p>
        </div>
      )}

      {status === 'failed' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
      )}

      {weather && status === 'succeeded' && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">{weather.location}</h2>
            <div className="text-6xl my-4">{weather.icon}</div>
            <div className="text-4xl font-bold text-blue-600">
              {weather.temperature}°C
            </div>
            <div className="text-lg text-gray-600 capitalize">
              {weather.description}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-3 rounded text-center">
              <div className="text-sm text-gray-600">Humidity</div>
              <div className="text-xl font-semibold">{weather.humidity}%</div>
            </div>
            <div className="bg-gray-50 p-3 rounded text-center">
              <div className="text-sm text-gray-600">Wind Speed</div>
              <div className="text-xl font-semibold">{weather.windSpeed} km/h</div>
            </div>
          </div>

          {lastUpdated && (
            <div className="text-center mt-4 text-sm text-gray-500">
              Last updated: {formatLastUpdated(lastUpdated)}
            </div>
          )}

          <div className="text-center mt-4">
            <button
              onClick={() => dispatch(clearWeather())}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 text-sm text-gray-600 text-center">
        <p>Demo weather data with simulated API calls</p>
      </div>
    </div>
  );
};

export default WeatherPage;
