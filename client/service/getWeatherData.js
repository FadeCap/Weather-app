const getWeatherData = async (city) => {
    let weatherData = {}
  
    weatherData = await fetch(`http://localhost:8080/api/weather?city=${city}`)
    .then(response => response.json())
    .then(data => weatherData = data)
  
    return weatherData
    
  }

  export default getWeatherData