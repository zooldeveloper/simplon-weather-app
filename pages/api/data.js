import { fetchWeatherApi } from "openmeteo";
import CITY from "./city.json";
import { wmoToIcon, wmoToDescription } from "../../services/converters";


export default async function handler(req, res) {
  const params = {
    latitude: CITY.lat,
    longitude: CITY.lon,
    current: [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "wind_speed_10m",
      "wind_direction_10m",
      "visibility",
      "weather_code",
      "is_day",
    ],
    daily: ["sunrise", "sunset"],
    timezone: "auto",
    wind_speed_unit: "ms",
    forecast_days: 1,
  };

  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];

  const current = response.current();
  const daily = response.daily();

  const weatherCode = current.variables(6).value();
  const isDay = current.variables(7).value();

  res.status(200).json({
    name: CITY.name,
    sys: {
      country: CITY.country,
      sunrise: Number(daily.variables(0).valuesInt64(0)),
      sunset: Number(daily.variables(1).valuesInt64(0)),
    },
    weather: [
      {
        description: wmoToDescription(weatherCode),
        icon: wmoToIcon(weatherCode, isDay === 1),
      },
    ],
    main: {
      temp: current.variables(0).value(),
      feels_like: current.variables(1).value(),
      humidity: current.variables(2).value(),
    },
    wind: {
      speed: current.variables(3).value(),
      deg: current.variables(4).value(),
    },
    visibility: current.variables(5).value(),
    timezone: response.utcOffsetSeconds(),
    dt: Number(current.time()),
  });
}