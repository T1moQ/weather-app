import { RiSearchLine } from "react-icons/ri";
import cl from '../UI/WeatherForm.module.css'

const WeatherForm = (props) => {
   const { serach, setSearch, fetchWeather } = props
   return (
      <div className={cl.container}>
         <form className={cl.form}>
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
   )
}

export default WeatherForm
