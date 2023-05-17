import axios from "axios"



const weatherService = {
   async getWeather(city) {
    const {data} = await axios({
     method: 'get',
     url:`https://api.api-ninjas.com/v1/geocoding?city=${city}`,
     headers:{"X-Api-Key":process.env.GEOLOCATION_API_KEY}
    })
    const {name, latitude, longitude} = data[0]
    const response = await axios({
      method:'get',
      baseURL:'https://api.openweathermap.org',
      url:`/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.WEATHER_API_KEY}`
    })

    return {
      name,
      temp: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      weatherType: response.data.weather[0].main,
      description: response.data.weather[0].description
    }
   },
};


export default weatherService;
