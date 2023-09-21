import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../components/navbar'
import MenuBar from '../components/toggleMenuBar'
import Footer from '../components/footer'

export default function Bio() {
  // setState variables
  const location = useLocation()
  // set darkMode variable based on darkMode state from query parameters
  const [darkMode, setDarkMode] = useState(location.search.includes('darkMode=true'))

  function toggleDarkMode(input) {
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
    <div className={!darkMode ? 'bio--page' : 'bio--page--dark'}>

      {/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/> */}
      {/* Have Menubar closed or open based on screen size also */}
      {!isMenuOpen && <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>}

      {isMenuOpen && <MenuBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>}

      <h1 className={!darkMode ? 'bio--welcome--title' : 'bio--welcome--title--dark'}>gospel_gamers | bio 📖</h1>

      <p className={!darkMode ? 'bio--para' : 'bio--para--dark'}>Jonathan Knabe is the founder of the gospel_gamers collective. His story is quite unique - one that has spanned two continents, two cities and two decades. As a German-American dual citizen, he was raised in Berlin and attended the John F. Kennedy bilingual school his entire childhood before he moved to Richmond, VA to attend  the University of Richmond. A devout Christian, he was raised in the church were he learned to sing, act and play music for the glory of God. At the same time he always had a rather inquisitive mind and loved video games and logic. This fusion describes his personality and the reason he started the gospel_gamers collective. To use both the arts and logic in a creative way as a musician, actor, voice-over artist, audio-engineer, programmer and more!</p>

      <Footer darkMode={darkMode}/>

    </div>
  )
}
