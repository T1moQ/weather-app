import axios from "axios"

const url = `https://api.openweathermap.org/data/2.5/weather?q=Barnaul&appid=411b1d5264869194452c85cce4f169ff&units=metric`

async function fetchWeather(event) {
    event.preventDefault()
    const response = await axios.get(url)
    console.log(response.data)
}
  
export default fetchWeather