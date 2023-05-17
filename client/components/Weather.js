import Halla from "./Halla.js"
const Weather = () => {

  const array = ['hei', 'ho', 'hoi']

  return (`
  <h1>
  Hello World
  </h1>
  ${array.map(text => Halla(text)).join('')}
  `
  )
}

export default Weather
