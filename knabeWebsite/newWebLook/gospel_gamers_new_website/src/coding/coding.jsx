import { useState } from 'react'
import './coding.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Coding() {
  // setState variables
  const [darkMode, setDarkMode] = useState(location.search.includes('darkMode=true'))

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={!darkMode ? 'coding--page' : 'coding--page--dark'}>

      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

      <h1 className={!darkMode ? 'welcome--coding--title' : 'welcome--coding--title--dark'}>coding == 'cool' ? 🥳 : 😩</h1>

      <p>
        I am a self-taught developer and built this website using HTML, CSS, JavaScript and React. As of late, I have also been learning C# for video game development using the Unity engine. Visit my contact page regarding any inquiries and check out these two projects of mine:
      </p>

      <div className={!darkMode ? 'coding--button--section' : 'coding--button--section--dark'}>

        <Link to={`/jazz`}>
          <button className={!darkMode ? 'coding--buttons' : 'coding--buttons--dark'}>
            jazz chord generator
          </button>
        </Link>

        <Link to={`/scales`}>
          <button className={!darkMode ? 'coding--buttons' : 'coding--buttons--dark'}>
            scales generator
          </button>
        </Link>

      </div>

      <Footer darkMode={darkMode}/>

    </div>
  )
}
