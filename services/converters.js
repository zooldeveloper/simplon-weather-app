export const ctoF = (c) => (c * 9) / 5 + 32;

export const mpsToMph = (mps) => (mps * 2.236936).toFixed(2);

export const kmToMiles = (km) => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time) => {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

export const degToCompass = (num) => {
  var val = Math.round(num / 22.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

export const unixToLocalTime = (unixSeconds, timezone) => {
  let time = new Date((unixSeconds + timezone) * 1000)
    .toISOString()
    .match(/(\d{2}:\d{2})/)[0];

  return time.startsWith("0") ? time.substring(1) : time;
};

// Converts WMO weather codes to human-readable descriptions
export const wmoToDescription = (weatherCode) => {
  const map = {
    0: "clear sky",
    1: "mainly clear",
    2: "partly cloudy",
    3: "overcast",
    45: "fog",
    48: "icy fog",
    51: "light drizzle",
    53: "moderate drizzle",
    55: "dense drizzle",
    61: "slight rain",
    63: "moderate rain",
    65: "heavy rain",
    66: "light freezing rain",
    67: "heavy freezing rain",
    71: "slight snow",
    73: "moderate snow",
    75: "heavy snow",
    77: "snow grains",
    80: "slight showers",
    81: "moderate showers",
    82: "violent showers",
    85: "slight snow showers",
    86: "heavy snow showers",
    95: "thunderstorm",
    96: "thunderstorm with hail",
    99: "thunderstorm with heavy hail",
  };
  return map[weatherCode] ?? "unknown";
};

// Converts WMO weather codes to corresponding icon names based on whether it's day or night
export const wmoToIcon = (weatherCode, isDay) => {
  const suffix = isDay ? "d" : "n";
  if (weatherCode === 0 || weatherCode === 1) return `01${suffix}`;
  if (weatherCode === 2) return `02${suffix}`;
  if (weatherCode === 3) return `04${suffix}`;
  if (weatherCode === 45 || weatherCode === 48) return `50${suffix}`;
  if ([51, 53, 55, 80, 81, 82].includes(weatherCode)) return `09${suffix}`;
  if ([61, 63, 65, 66, 67].includes(weatherCode)) return `10${suffix}`;
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) return `13${suffix}`;
  if ([95, 96, 99].includes(weatherCode)) return `11${suffix}`;
  return `01${suffix}`;
};
