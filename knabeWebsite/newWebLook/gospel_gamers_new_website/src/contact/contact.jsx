import { useState } from 'react'
import NavBar from '../components/navbar'
import ContactForm from '../components/contactForm'
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

      {/* this is where the contact form begins*/}

     <ContactForm darkMode={darkMode} />


      <Footer darkMode={darkMode}/>

    </div>
  )
}
