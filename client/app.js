import WeatherCard from "./components/weatherCard.js";
const app = document.getElementById('root');



async function render(){
    const content = await WeatherCard()
    app.innerHTML = content
}
render()

