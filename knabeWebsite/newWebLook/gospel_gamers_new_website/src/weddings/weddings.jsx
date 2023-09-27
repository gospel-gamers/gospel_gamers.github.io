import { useState } from 'react'
import './weddings.css'
import NavBar from '../components/navbar'
import MenuBar from '../components/toggleMenuBar'
import WeddingPricings from '../components/weddingPricings'
import Footer from '../components/footer'

export default function Weddings() {
  // setState variables
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(location.search.includes('darkMode=true'))

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  // hamburger menu toggle
  // menu bar for navbar

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      // console.log(isMenuOpen)
  };

  return (
    <div className={!darkMode ? 'wedding--page' : 'wedding--page--dark'}>

      {/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/> */}
      {/* Have Menubar closed or open based on screen size also */}
      {!isMenuOpen && <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>}
      {isMenuOpen && <MenuBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>}


      {/*<h1 className={!darkMode ? 'welcome--title' : 'welcome--title--dark'}>Welcome to my audio pricings page</h1>*/}

      <WeddingPricings darkMode={darkMode} />


      <Footer darkMode={darkMode}/>

    </div>
  )
}
