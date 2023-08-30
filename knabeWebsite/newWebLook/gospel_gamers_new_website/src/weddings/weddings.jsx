import { useState } from 'react'
import NavBar from '../components/navbar'
import WeddingPricings from '../components/weddingPricings'
import Footer from '../components/footer'

export default function Weddings() {
  // setState variables
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(location.search.includes('darkMode=true'))

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={!darkMode ? 'wedding--page' : 'wedding--page--dark'}>

      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

      {/*<h1 className={!darkMode ? 'welcome--title' : 'welcome--title--dark'}>Welcome to my audio pricings page</h1>*/}

      <WeddingPricings darkMode={darkMode} />

      <Footer darkMode={darkMode}/>

    </div>
  )
}
