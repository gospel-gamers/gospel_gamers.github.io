import { useState } from 'react'
import NavBar from '../components/navbar'
import ContactForm from '../components/contactForm'
import Footer from '../components/footer'

export default function Contact() {
  // setState variables
  const [darkMode, setDarkMode] = useState(location.search.includes('darkMode=true'))

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={!darkMode ? 'contact--page' : 'contact--page--dark'}>

      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

      <h1 className={!darkMode ? 'contact--welcome--title' : 'contact--welcome--title--dark'}>To contact me for any of my services, fill out this form and verify you are not a bot &#129302;</h1>


      {/* this is where the contact form begins*/}
     <ContactForm darkMode={darkMode} />


      <Footer darkMode={darkMode}/>

    </div>
  )
}
