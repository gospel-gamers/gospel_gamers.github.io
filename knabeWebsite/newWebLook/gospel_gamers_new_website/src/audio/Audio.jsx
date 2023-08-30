//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import Card  from './components/card'
import { useState } from 'react'
import './Audio.css'
import NavBar from '../components/navbar'
import AudioPricings from '../components/audioPricings'
import Footer from '../components/footer'

export default function Audio() {
  // setState variables
  const [darkMode, setDarkMode] = useState(location.search.includes('darkMode=true'))

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={!darkMode ? 'audio--page' : 'audio--page--dark'}>

      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

      <h1 className={!darkMode ? 'welcome--title' : 'welcome--title--dark'}>Got feedback 🔊? Turn the 🎛️ and fix the 🎙️! </h1>

      <AudioPricings darkMode={darkMode} />

      <Footer darkMode={darkMode}/>

    </div>
  )
}
