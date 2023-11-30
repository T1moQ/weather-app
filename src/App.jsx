import './App.css'
// import WeatherForm from './components/UI/WeatherForm'
import { RiSearchLine } from "react-icons/ri";
import WheatherDisplay from './components/WheatherDisplay'
import cl from './components/UI/WeatherForm.module.css'
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState({})
  const [serach, setSearch] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${serach}&appid=411b1d5264869194452c85cce4f169ff&units=metric`

  async function fetchWeather(event) {
    event.preventDefault()
    const response = await axios.get(url)
    setData(response.data)
    console.log(response.data)
    setSearch('')
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Weather Forecast App</h1>
      </header>
      <main className='app-main'>
        {/* <WeatherForm /> */}
        <div className={cl.container}>
          <form action="#" className={cl.form}>
            <input
              className={cl.input}
              type="text"
              placeholder='Enter city...'
              value={serach}
              onChange={event => setSearch(event.target.value)}
            />
            <button className={cl.button} onClick={fetchWeather}><RiSearchLine /></button>
          </form>
        </div>
        {/* <h2>Enter city</h2> */}
        <WheatherDisplay />
      </main>
    </div>
  )
}

export default App
