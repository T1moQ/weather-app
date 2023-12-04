import st from '../components/WheatherDisplay.module.css'

const WheatherDisplay = (props) => {
   const { data } = props
   return (
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
   )
}

export default WheatherDisplay
