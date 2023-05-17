import WeatherInformation from "./WeatherInformation.js";
const WeatherCard = () => {

  const mockData = {
    name: "Skodje",
    temp: 2,
    feels_like: 4,
    weatherType: "Drizzle",
    description: "Light rainfall, cloudy"
  }

  return `
  <h1> Weather </h1>
  <div>
    <form class="form">
    <input id="weather-input" name="search">
    <label for="search"></label>
      <button class="fetchButton" onclick="fetchData()" type="submit">Submit
      </button>
    </form>
    ${WeatherInformation(mockData)}
  </div>
`;
};

export default WeatherCard;
