import { RiSearchLine } from "react-icons/ri";
import cl from '../UI/WeatherForm.module.css'
// import url from '../../data/data.js'
import axios from "axios";

const WeatherForm = () => {

   const url = `https://api.openweathermap.org/data/2.5/weather?q=Barnaul&appid=411b1d5264869194452c85cce4f169ff&units=metric`

   async function fetchWeather() {
      const response = await axios.get(url)
      console.log(response.data)
   }

   return (
      <div className={cl.container}>
         <form action="#" className={cl.form}>
            <input className={cl.input} type="text" placeholder='Enter city...' />
            <button className={cl.button} onClick={fetchWeather}><RiSearchLine /></button>
         </form>
      </div>
   )
}

export default WeatherForm
