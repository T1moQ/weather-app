import './App.css'
// import WeatherForm from './components/UI/WeatherForm'
import { RiSearchLine } from "react-icons/ri";
// import WheatherDisplay from './components/WheatherDisplay'
import cl from './components/UI/WeatherForm.module.css'
import st from './components/WheatherDisplay.module.css'
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

        {data.main != undefined &&
          <div className={st.display}>
            <div className={st.city}>
              <p>{data.name}</p>
            </div>
            <div className={st.temp}>
              {data.main ? <h2>{Math.floor(data.main.temp)}°C</h2> : null}
            </div>
            <div className={st.description}>
              {data.main ? <p>{data.weather[0].description}</p> : null}
            </div>
            <div><img className={st.icon} src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="#" /></div>
            <div className={st.displayInfo}>
              <div>
                <p className={st.bold}>Feels Like</p>
                {data.main ? <p className={st.number}>{(data.main.feels_like.toFixed(0))}°C</p> : null}
              </div>
              <div>
                <p className={st.bold}>Humidity</p>
                {data.main ? <p className={st.number}>{data.main.humidity}%</p> : null}
              </div>
              <div>
                <p className={st.bold}>Wind </p>
                {data.main ? <p className={st.number}>{(data.wind.speed).toFixed(0)} m/s</p> : null}
              </div>
            </div>
          </div>
        }
      </main>
    </div>
  )
}

export default App
