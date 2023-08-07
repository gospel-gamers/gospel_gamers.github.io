import { useState } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Bio() {
  // setState variables
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={!darkMode ? 'bio--page' : 'bio--page--dark'}>

      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

      <h1 className={!darkMode ? 'welcome--title' : 'welcome--title--dark'}>Welcome to my bio page</h1>


      <Footer darkMode={darkMode}/>

    </div>
  )
}
