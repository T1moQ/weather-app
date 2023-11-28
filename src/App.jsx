import './App.css'
import WeatherForm from './components/UI/WeatherForm'
import WheatherDisplay from './components/WheatherDisplay'

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Weather Forecast App</h1>
      </header>
      <main className='app-main'>
        <WeatherForm />
        {/* <h2>Enter city</h2> */}
        <WheatherDisplay />
      </main>
    </div>
  )
}

export default App
