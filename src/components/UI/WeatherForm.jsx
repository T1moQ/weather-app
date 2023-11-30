import { RiSearchLine } from "react-icons/ri";
import cl from '../UI/WeatherForm.module.css'
import fetchWeather from "../../data/data";


const WeatherForm = () => {
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
