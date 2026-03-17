# Weather App

Check the current weather of Saint Nazaire city. Switch between metric and imperial units.

![Alt img](https://images.ctfassets.net/zlsyc9paq6sa/3uBrJ07WSM40FpolgjInHY/7d886cb4187b52194bf9b63c183a1d3a/1627637330_x.gif)

## Features

1. Current local time and date

2. Temperatures and humidity

3. Wind speed and direction

4. Sunrise and sunset times

5. Metric vs Imperial system

6. Error handling and loading info

## Installation

1. `git clone https://github.com/zooldeveloper/simplon-weather-app.git`

2. `cd simplon-weather-app`

3. `npm install`

4. `npm run dev`

## API Testing

To see the weather data of a different city, modify the following values in the confugration file: `/pages/api/city.json`  

1. "name": "city_name", 
2.  "country": "city_county", 
3.  "lat": city_latitude, 
4.  "lon": city_longitude

For more info about the weather api, check the Open Meteo documentation [Open-Meteo.com](https://open-meteo.com/)

## Contributions

Any feature requests and pull requests are welcome!

## License

The project is under [MIT license](https://choosealicense.com/licenses/mit/).
