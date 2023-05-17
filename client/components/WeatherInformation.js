
const WeatherInformation = (data) => {
    const  
    {   
        name, 
        temp, 
        feels_like,
        weatherType,
        description
    } = data

    if (!data){
        return ""
    }
    return `<div class="info-container">
              <div class="area-temp">
                <h2>${name}</h2>
                <h3>${temp}°C</h3>
              </div>
                <h3>Feels like: ${feels_like}°C</h3>
                <h3>${weatherType}</h3>
                <p class="weather-description">${description}</p>
            </div>
  `
}

export default WeatherInformation

