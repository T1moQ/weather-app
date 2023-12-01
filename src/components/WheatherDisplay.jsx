import cl from '../components/WheatherDisplay.module.css'

const WheatherDisplay = ({ data }) => {
   return (
      <div className={cl.display}>
         <div className={cl.city}>
            <p>{data.name}</p>
         </div>
         <div className={cl.temp}>
            <h2>-1°C</h2>
         </div>
         <div className={cl.description}>
            <p>Partly Cloudy</p>
         </div>
         <div className={cl.displayInfo}>
            <div>
               <p className={cl.bold}>Feels Like</p>
               <p className={cl.number}>0</p>
            </div>
            <div>
               <p className={cl.bold}>Humidity</p>
               <p className={cl.number}>70%</p>
            </div>
            <div>
               <p className={cl.bold}>Wind </p>
               <p className={cl.number}>3 m/s</p>
            </div>
         </div>
      </div>
   )
}

export default WheatherDisplay
