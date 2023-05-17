import weatherService from "../services/weather/weatherService.js";

const weatherController = {
  async getWeather(req, res) {
    try {
      const {city} = req.query
      const weather = await weatherService.getWeather(city);
      res.json(weather);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default weatherController;
