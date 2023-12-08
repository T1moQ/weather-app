import { useState } from 'react';
import axios from 'axios';
import './App.css'
import WeatherForm from './components/UI/WeatherForm'
import WheatherDisplay from './components/WheatherDisplay';


function App() {
  const [data, setData] = useState({})
  const [serach, setSearch] = useState('')
  const [error, setError] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${serach}&appid=411b1d5264869194452c85cce4f169ff&units=metric`


  async function fetchWeather(event) {
    event.preventDefault()
    try {
      const response = await axios.get(url)
      setData(response.data)
      setSearch('')
      setError('')
    } catch (error) {
      if (error.response.status === 404) {
        setError('Sorry... There is no such city in the list =(')
        setSearch('')
      } else if (error.response.status === 400) {
        setError('The city name field cannot be empty')
        setSearch('')
      }
    }
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Weather Forecast App</h1>
      </header>
      <main className='app-main'>
        <WeatherForm
          serach={serach}
          setSearch={setSearch}
          fetchWeather={fetchWeather} />
        {error
          ? <h2 className='error'>{error}</h2>
          : (data.main != undefined &&
            <WheatherDisplay data={data} />)
        }
      </main>
    </div>
  )
}

export default App
