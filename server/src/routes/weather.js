import express from 'express';
import weatherController from '../controllers/weatherController.js';

const router = express.Router();

// Define route
router.get('/', weatherController.getWeather);

export default router;
