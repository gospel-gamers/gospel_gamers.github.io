import { useState } from 'react'
import './contact.css'
import NavBar from '../components/navbar'
import MenuBar from '../components/toggleMenuBar'
import ContactForm from '../components/contactForm'
import Footer from '../components/footer'

export default function Contact() {
  // setState variables
  const [darkMode, setDarkMode] = useState(location.search.includes('darkMode=true'))

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      // console.log(isMenuOpen)
  };

  return (
    <div className={!darkMode ? 'contact--page' : 'contact--page--dark'}>

      {/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/> */}
      {/* Have Menubar closed or open based on screen size also */}
      {!isMenuOpen && <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>}
      {isMenuOpen && <MenuBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>}

      <h1 className={!darkMode ? 'contact--welcome--title' : 'contact--welcome--title--dark'}>To contact me for any of my services, fill out this form and verify you are not a bot 🤖</h1>


      {/* this is where the contact form begins*/}
     <ContactForm darkMode={darkMode} />


      <Footer darkMode={darkMode}/>

    </div>
  )
}
