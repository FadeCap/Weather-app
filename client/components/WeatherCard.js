const WeatherCard = () => {

  const mockData = {
    name: "Skodje",
    temp: 5,
    feels_like: 4,
    weatherType: "Fint",
    description: "Kjempe fint ute"
  }

  return `
  <h1> Weather </h1>
  <form>
  <input id="weather-input" name="search">
  <label for="search">Search</label>
  </form>
  <button class="submit-btn" type="submit">Submit</button>
`;
};

export default WeatherCard;
