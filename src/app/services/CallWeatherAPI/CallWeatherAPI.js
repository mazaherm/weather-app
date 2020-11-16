import axios from 'axios'
import config from '../../config.js'

const API_KEY = config.API_KEY
const URL = `https://api.openweathermap.org/data/2.5/forecast?q=London,UK&units=metric&cnt=1&appid=${API_KEY}`

export default async () => {
  try {
    const response = await axios.get(URL)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
