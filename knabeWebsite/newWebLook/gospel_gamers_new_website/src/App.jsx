import { useState } from 'react'
import './App.css'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// import NavBar from './components/navbar'
// import Card  from './components/card'
// import Footer from './components/footer'

// import all the different pages
import HomePage from './HomePage'
import Audio from './audio/Audio'
import Coding from './coding/coding'
import Weddings from './weddings/weddings'
import Contact from './contact/contact'
import JazzChordGen from './coding/jazzReact' 
import ScaleGenerator from './coding/scaleReact'

// react-router
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'


function App() {
  // setState variables
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/audio" element={<Audio />} />
        <Route exact path="/weddings" element={<Weddings />} />
        <Route exact path="/coding" element={<Coding />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/jazzChords" element={<JazzChordGen />} />
        <Route exact path="/scales" element={<ScaleGenerator />} />
        
      </Routes>
    </Router>
  )
}
 
export default App
