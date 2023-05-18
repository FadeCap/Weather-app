import WeatherInformation from "./WeatherInformation.js";
import getWeatherData from "../service/getWeatherData.js";

const WeatherCard = async () => {

  const weatherData = await getWeatherData("Ålesund")
 


  return `
  <h1> Weather </h1>
  <div>
    <form class="form">
    <input onclick="handleClick()" id="weather-input" name="search">
    <label for="search"></label>
      <button class="fetchButton"  type="submit">Submit
      </button>
    </form>
    ${WeatherInformation(weatherData)}
  </div>
`;
};

export default WeatherCard;
