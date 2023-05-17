import express from "express";
import dotenv from "dotenv";
import weatherRouter from "./routes/weather.js"
dotenv.config();

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/api/weather', weatherRouter)

app.listen(PORT, () => {
  console.log('⚡ listening on port:', PORT)
})