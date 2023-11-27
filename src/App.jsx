import './App.css'
import WeatherForm from './components/UI/WeatherForm'

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Weather Forecast App</h1>
      </header>
      <main className='app-main'>
        <WeatherForm />
      </main>
    </div>
  )
}

export default App
