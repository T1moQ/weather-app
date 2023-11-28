import cl from '../components/WheatherDisplay.module.css'

const WheatherDisplay = () => {
   return (
      <div className={cl.display}>
         <div className={cl.city}>
            <p>Moscow</p>
         </div>
         <div className={cl.temp}>
            <h2>-1°C</h2>
         </div>
         <div className={cl.description}>
            <p>Partly Cloudy</p>
         </div>
         <div className={cl.displayInfo}>
            <div>
               <p>Feels Like</p>
               <p>0</p>
            </div>
            <div>
               <p>Humidity</p>
               <p>70%</p>
            </div>
            <div>
               <p>Wind</p>
               <p>3 m/s</p>
            </div>
         </div>
      </div>
   )
}

export default WheatherDisplay
