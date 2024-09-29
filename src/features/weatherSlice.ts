import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

interface WeatherState {
  data: WeatherData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  lastUpdated: string | null;
}

const initialState: WeatherState = {
  data: null,
  status: "idle",
  error: null,
  lastUpdated: null,
};

// Using OpenWeatherMap API (free tier, requires API key)
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    // Mock weather data for demo purposes (replace with real API)
    const mockWeatherData: WeatherData = {
      location: city,
      temperature: Math.floor(Math.random() * 30) + 5,
      description: ["Sunny", "Cloudy", "Rainy", "Partly Cloudy"][
        Math.floor(Math.random() * 4)
      ],
      humidity: Math.floor(Math.random() * 40) + 40,
      windSpeed: Math.floor(Math.random() * 20) + 5,
      icon: "☀️",
    };

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return mockWeatherData;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    clearWeather: (state) => {
      state.data = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch weather";
      });
  },
});

export const { clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
