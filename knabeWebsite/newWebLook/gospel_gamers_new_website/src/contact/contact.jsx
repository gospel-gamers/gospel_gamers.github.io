import { useState } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Contact() {
  // setState variables
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={!darkMode ? 'contact--page' : 'contact--page--dark'}>

      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

      {/*<h1 className={!darkMode ? 'welcome--title' : 'welcome--title--dark'}>Welcome to my audio pricings page</h1>*/}


      <Footer darkMode={darkMode}/>

    </div>
  )
}
